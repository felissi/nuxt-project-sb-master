import { computed } from "vue";
import type { UseQueryReturnType, UseQueryOptions } from "vue-query";
import { useQueries, useQuery } from "vue-query";
import { useJwt, useRoleQuery } from "@/services/api";
// import { useRole } from "../api/load-meta";
import { loadStudentPaperQuery } from "@/services/api/load-student-paper";
import { loadTeacherPaperQuery, LoadTeacherPaperParams } from "@/services/api/load-teacher-paper";
import { Paper } from "@/services/models";
import { toRef, reactiveComputed } from "@vueuse/core";

export function useLoadPaperQuery<
  TOption extends UseQueryOptions<Paper[], Error, Paper[], string[]>
>(
  // @ts-ignore TS(1015) FIXME: Parameter cannot have question mark and initialize... Remove this comment to see the full error message
  para?: LoadTeacherPaperParams = {},
  options?: TOption = undefined
): UseQueryReturnType<Paper[], Error> {
  const { data: role } = useRoleQuery();
  const { data: token } = useJwt();
  console.log("🚀 // DEBUG 🍔 ~ para:", para);
  return useQuery(
    // @ts-ignore TS(2322) FIXME: Type '{ type: "teacher_preset" | "my" | "student_p... Remove this comment to see the full error message
    [role.value?.isTeacher ? "loadTeacherPaper" : "loadStudentPaper", para],
    () => (role.value?.isTeacher ? loadTeacherPaperQuery : loadStudentPaperQuery)({
      // @ts-ignore TS(2322) FIXME: Type 'string | undefined' is not assignable to typ... Remove this comment to see the full error message
      token: token.value,

      // @ts-ignore TS(2339) FIXME: Property 'value' does not exist on type '{ type: "... Remove this comment to see the full error message
      para: para.value,
    }),
    {
      enabled: computed(() => !!role.value && !!token.value),
      ...options,
    }
  );
}
