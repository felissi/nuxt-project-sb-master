import type { StudentPaper, TeacherPaper } from "@/services/models";
import { computedWithControl } from "@vueuse/core";
import type { Ref } from "vue";

// @ts-ignore TS(2614) FIXME: Module '"*.vue"' has no exported member 'State'. D... Remove this comment to see the full error message
import type { State } from "./CardButtonBar.vue";

function parseStudentPaper(paper: StudentPaper): State {
  if (
    paper.mySubmmitedTrialNo &&
    paper.status.canReview &&
    paper.status.canStart &&
    paper.status.canReport
  ) {
    return "studentReportReadyRetry";
  }
  if (
    paper.mySubmmitedTrialNo &&
    paper.status.canReview &&
    paper.status.canStart &&
    !paper.status.canReport
  ) {
    return "studentReportUnReadyRetry";
  }
  if (paper.status.canStart) return "studentPublished";
  if (paper.status.canReview && paper.status.canReport) {
    return "studentReportReady";
  }
  if (paper.status.canReview && !paper.status.canReport) {
    return "studentReportUnReady";
  }
}
function parseTeacherPaper(paper: TeacherPaper): State {
  /** Seem like shareReport is separated */

  if (paper.status.canModify && paper.status.canPreview && paper.status.canSharePaper) {
    return "teacherDraft";
  }
  if (
    // @ts-ignore TS(2367) FIXME: This condition will always return 'true' since the... Remove this comment to see the full error message
    paper.tab !== "student_preset" &&
    paper.published &&
    paper.status.canReport &&
    paper.status.canPreview
  ) {
    return "teacherPublished";
  }
  /** For NSP, it magically has `canAccept` and `canReject` set */
  if (paper.tab !== "shared" && paper.status.canView && paper.status.canPreview) {
    return "teacherEditPreview";
  }

  // @ts-ignore TS(2367) FIXME: This condition will always return 'false' since th... Remove this comment to see the full error message
  if (paper.tab === "student_preset" && paper.status.canView && paper.status.canPreview) {
    return "teacherEditPreview";
  }
  if (
    paper.tab === "shared" &&
    paper.status.canPreview &&
    paper.status.canAccept &&
    paper.status.canReject
  ) {
    return "teacherShared";
  }
}
/** Shitty function to tell what buttons should be shown from a paper object. */
export function parseState(paper: TeacherPaper | StudentPaper, role: "teacher" | "student"): State {
  if (role === "teacher") {
    return parseTeacherPaper(paper as TeacherPaper);
  }
  if (role === "student") {
    return parseStudentPaper(paper as StudentPaper);
  }
}

// @ts-ignore TS(2304) FIXME: Cannot find name 'Paper'.
export function useParseState(paper: Paper, role: "teacher" | "student"): Ref<State> {
  return computedWithControl(
    () => [paper, role],
    () => parseState(paper, role)
  );
}
