import { test, expect } from "vitest";

// @ts-ignore TS(2307) FIXME: Cannot find module 'change-case/keys' or its corre... Remove this comment to see the full error message
import { camelCase } from "change-case/keys";
import * as PS from "./useParseState";

// @ts-ignore TS(2614) FIXME: Module '"*.vue"' has no exported member 'State'. D... Remove this comment to see the full error message
import { State } from "./CardButtonBar.vue";

test("student - should give review/report", async() => {
  const state = PS.parseState(
    {
      id: 4007,
      objectErrorList: [],
      project: "star",
      userId: 200000150,
      schoolCode: "hke",
      acayear: "2022/23",

      // @ts-ignore TS(2322) FIXME: Type 'number' is not assignable to type '"13" | "1... Remove this comment to see the full error message
      packageId: 15,
      source: 0,
      title: "2022-10-06",
      content: "",
      description: "",
      closeUrl: "",
      leaderboardCode: "",
      leaderboardMode: "",
      reportMode: "last",
      startTime: "2022-10-06 14:44:00",
      endTime: "2022-10-23 00:00:00",
      publishDate: "2022-10-06 14:44:24",
      published: 1,
      bcVer: "bc_2017",
      attempted: 1,
      ended: 1,
      timeAllowed: 0,
      timeBonus: 0,
      maxTrialNo: 1,
      maxTrialScore: 0,
      autoSaveInterval: 60,
      submitOnce: 1,
      cannotGoPrev: 0,
      forceAnswer: 0,
      showFeedback: 0,
      viewAfterSubmit: 0,
      preserveLastSubmitAns: 1,
      suppressMedia: 0,
      trialsAssigned: 0,
      trialsSubmitted: 0,
      trialsMarked: 0,
      trialsTotal: 0,
      sections: [
        {
          id: 3819,
          createAt: "2022-10-06 14:44:24",
          createBy: "hke-felixwong-tr",
          modifyAt: "2022-10-06 14:44:24",
          modifyBy: "hke-felixwong-tr",
          objectErrorList: [],
          paperId: 4007,
          seq: 1,
          title: "",
          content: "",
          noOfQuestions: 2,
          suggestedTime: 360,
          mode: "sequential",
          criteria: "",
          setting: '{"qtiplayer":{"type":"qtiplayer","score":1}}',
          sectionQuestions: [],
        },
      ],
      trials: [
        {
          paperId: 4007,
          userId: 200000151,
          schoolCode: "",
          submitted: 1,
          marked: 1,
          timeElapsed: 11,
          submitTime: "2022-10-06 15:09:15",
          forceSubmit: 0,
          score: 2,
          scoreBasic: 0,
          token:
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NjUwNDAxMjEsImV4cCI6MTY2NTA1MDkyMSwidXNlciI6eyJjaXR5X2lkIjoiaGtlLWZlbGl4d29uZy1zdCIsImdyYWRlX2xldmVsIjoiUzEiLCJzY2hvb2xfY2xhc3MiOiJTMUEiLCJjbGFzc19ubyI6bnVsbCwibmlja25hbWUiOiJXb25nIFl1ayBXaW5nLCBGZWxpeCIsImVtYWlsX2FkZHJlc3MiOiIiLCJzdGF0dXMiOjEsInNjaF9sZXZlbF9pZCI6MTAsInVzZXJfaWQiOjIwMDAwMDE1MSwicm9sZXMiOiIxMDAwMDAwMDYiLCJncm91cHMiOiI1ODZiMjY1NGMyODdkOF84MjMxNDg1NCw1ODZiMjY1NjExYTIzNF82MTI1MTY0Niw1ODZiMjY1Njk0ZmM0Nl8wNTUyNTU4NCw1ODcyZTlmMjJmZWM3MV83OTU2MTU5Myw1OTI2NWVkZDE5MzllNF80NzIwODk5MCw1ZDI1ODZjYWM5ZWZkNF84ODAwMjUzNCw1ZDI1OGM5ZGVlOTI3MV85NjAzNTU5Miw1ZDI1YWQ4MmVmNGIyM182ODMzOTA4MCw1YzkwYjhkYTRmODk2Ml85OTU3Njk0NCIsImNmdWxsbmFtZSI6IldvbmcgWXVrIFdpbmcsIEZlbGl4IiwiZWZ1bGxuYW1lIjoiV29uZyBZdWsgV2luZywgRmVsaXgiLCJzY2hvb2xjb2RlIjoiaGtlIiwic2NoX2NsYXNzIjoiQSJ9fQ.Cw_kyxpblycMsqr3iPLBsW6AXmjsUbRj1gUm7TPBihs",
          resourceLinkPk: 0,
          ltiUserId: "",
          state: "",
          id: 5341,
        },
      ],
      ownerModifyAt: "2022-10-06 14:44:24",
      ownerInfo: {
        cityId: "hke-felixwong-tr",
        schoolCode: "hke",
        gradeLevel: null,
        schoolClass: null,
        class: null,
        classNo: null,
        fullnameC: "Wong Yuk Wing, Felix",
        fullnameE: "Wong Yuk Wing, Felix",
        nickname: "Wong Yuk Wing, Felix",
        emailAddress: "",
        status: 1,
        schLevelId: 0,
        userId: 200000150,
        roles: ["100000005"],
      },
      school: {
        nameE: "HONG KONG EDUCATION CITY SCHOOL",
        nameC: "香港教育城學校",
        schType: "SEC",
        schoolCode: "hke",
      },
      bcaCode: "",
      mySubmmitedTrialNo: 1,

      // @ts-ignore TS(2740) FIXME: Type '{ submission: "submitted"; isFrozen: true; c... Remove this comment to see the full error message
      status: {
        submission: "submitted",
        isFrozen: true,
        canStart: false,
        canView: false,
        canModify: false,
        canDelete: false,
        canAssign: false,
        canReview: true,
        canReport: true,
        reportSharedNum: 0,
        reportSharedAccepted: false,
      },
      tab: "",
    },
    "student"
  );
  expect(state).toEqual<State>("studentReportReady");
});
test("student - should give attempt/review/report", async() => {
  const paper = camelCase(
    {
      id: 714,
      object_error_list: [],
      project: "star",
      user_id: 200002245,
      school_code: "prj",
      acayear: "",
      package_id: 13,
      source: 0,
      title: "#14 student preset paper",
      content: "",
      description: "using Q in pk 13",
      close_url: "",
      leaderboard_code: "",
      leaderboard_mode: "",
      report_mode: "last",
      start_time: "2023-10-05 00:00:00",
      end_time: "2099-12-31 00:00:00",
      publish_date: "2023-10-05 00:00:00",
      published: 1,
      bc_ver: "",
      attempted: 1,
      ended: 0,
      time_allowed: 0,
      time_bonus: 0,
      max_trial_no: 0,
      max_trial_score: 0,
      auto_save_interval: 60,
      submit_once: 1,
      cannot_go_prev: 0,
      force_answer: 0,
      show_feedback: 0,
      view_after_submit: 1,
      preserve_last_submit_ans: 0,
      suppress_media: 0,
      trials_assigned: 0,
      trials_submitted: 0,
      trials_marked: 0,
      trials_total: 0,
      sections: [
        {
          id: 622,
          create_at: "2017-02-16 15:13:55",
          create_by: "hke-system",
          modify_at: "2023-10-05 10:15:16",
          modify_by: "hke-system",
          object_error_list: [],
          paper_id: 714,
          seq: 1,
          title: "",
          content: "",
          no_of_questions: 1,
          suggested_time: 680,
          mode: "sequential",
          criteria: "",
          setting: '{"qtiplayer":{"type":"qtiplayer","score":1}}',
          section_questions: [],
        },
      ],
      trials: [
        {
          paper_id: 714,
          user_id: 200000151,
          school_code: "hke",
          submitted: 1,
          marked: 1,
          time_elapsed: 13,
          submit_time: "2023-11-10 12:36:51",
          force_submit: 0,
          score: 0,
          score_basic: 0,
          token:
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2OTk1OTA5MzQsImV4cCI6MTY5OTYwMTczNCwidXNlciI6eyJjaXR5X2lkIjoiaGtlLWZlbGl4d29uZy1zdCIsImdyYWRlX2xldmVsIjoiUzEiLCJzY2hvb2xfY2xhc3MiOiJTMUEiLCJjbGFzc19ubyI6bnVsbCwibmlja25hbWUiOiJXb25nIFl1ayBXaW5nLCBGZWxpeCIsImVtYWlsX2FkZHJlc3MiOiIiLCJzdGF0dXMiOjEsInNjaF9sZXZlbF9pZCI6MTAsInVzZXJfaWQiOjIwMDAwMDE1MSwicm9sZXMiOiIxMDAwMDAwMDYiLCJncm91cHMiOiI1ODZiMjY1NGMyODdkOF84MjMxNDg1NCw1ODZiMjY1NjExYTIzNF82MTI1MTY0Niw1ODZiMjY1Njk0ZmM0Nl8wNTUyNTU4NCw1ODcyZTlmMjJmZWM3MV83OTU2MTU5Myw1OTI2NWVkZDE5MzllNF80NzIwODk5MCw1ZDI1ODZjYWM5ZWZkNF84ODAwMjUzNCw1ZDI1OGM5ZGVlOTI3MV85NjAzNTU5Miw1ZDI1YWQ4MmVmNGIyM182ODMzOTA4MCw2M2JlYWFiOWQ4ZmExNV8zNTU0NTQ5NSw1YzkwYjhkYTRmODk2Ml85OTU3Njk0NCw2MzUwYjdhMDFjNTE4OF82MTIyNTA0MCw2M2UwODgzMWI4MWJhN184MzgwMjI2Myw2M2Y1ZDUyZjkxMjMwMF80NDQ1MjMxNiw2NDM2MGZiOGRmYjdlNV81Nzk1NTUxNiIsImNmdWxsbmFtZSI6IldvbmcgWXVrIFdpbmcsIEZlbGl4IiwiZWZ1bGxuYW1lIjoiV29uZyBZdWsgV2luZywgRmVsaXgiLCJzY2hvb2xjb2RlIjoiaGtlIiwic2NoX2NsYXNzIjoiQSJ9fQ.cyM_0OlUZDoxfNLXVr0fHoTZFXrYjJa-Yj3MR2pf7oA",
          resource_link_pk: 0,
          lti_user_id: "",
          state: "",
          id: 5510,
        },
      ],
      owner_modify_at: "2023-12-22 14:57:24",
      owner_info: {
        city_id: "prj-star_tr8",
        school_code: "prj",
        grade_level: null,
        school_class: null,
        class: null,
        class_no: null,
        fullname_c: "自學評估",
        fullname_e: "Student Corner",
        nickname: null,
        email_address: "",
        status: 1,
        sch_level_id: 0,
        user_id: 200002245,
        roles: ["100000005"],
      },
      school: {
        name_e: "PROJECT TESTING, HKEDCITY",
        name_c: "教城專案測試學校",
        sch_type: "SEC",
        school_code: "prj",
      },
      bca_code: "",
      my_submmited_trial_no: 1,
      status: {
        submission: "submitted",
        is_frozen: true,
        can_start: true,
        can_view: false,
        can_modify: false,
        can_delete: false,
        can_assign: false,
        can_review: true,
        can_report: true,
        report_shared_num: 0,
        report_shared_accepted: false,
      },
      tab: "student_preset",
      type: "student_preset",
    },
    Number.MAX_SAFE_INTEGER
  );
  const state = PS.parseState(paper, "student");
  expect(state).toEqual<State>("studentReportReadyRetry");
});
test("teacher - should give edit/preview for NSP", async() => {
  const paper = camelCase(
    {
      id: 2222,
      object_error_list: [],
      project: "star",
      user_id: 200000002,
      school_code: "prj",
      acayear: "",
      package_id: 15,
      source: 200000002,
      title: "#12 nsp preset",
      content: "",
      description: "",
      close_url: "",
      leaderboard_code: "",
      leaderboard_mode: "",
      report_mode: "last",
      start_time: "2020-11-02 00:00:00",
      end_time: "2020-11-30 23:59:00",
      publish_date: "",
      published: 1,
      bc_ver: "bc_2000",
      attempted: 0,
      ended: 1,
      time_allowed: 0,
      time_bonus: 0,
      max_trial_no: 1,
      max_trial_score: 0,
      auto_save_interval: 60,
      submit_once: 1,
      cannot_go_prev: 0,
      force_answer: 1,
      show_feedback: 0,
      view_after_submit: 0,
      preserve_last_submit_ans: 1,
      suppress_media: 0,
      trials_assigned: 0,
      trials_submitted: 0,
      trials_marked: 0,
      trials_total: 0,
      sections: [
        {
          id: 1876,
          create_at: "2020-01-09 10:31:25",
          create_by: "hke-adrian-tr",
          modify_at: "2020-01-09 10:31:25",
          modify_by: "hke-adrian-tr",
          object_error_list: [],
          paper_id: 2222,
          seq: 1,
          title: "",
          content: "",
          no_of_questions: 2,
          suggested_time: 300,
          mode: "sequential",
          criteria: "",
          setting: '{"qtiplayer":{"type":"qtiplayer","score":1}}',
          section_questions: [],
        },
      ],
      trials: [],
      owner_modify_at: "2020-01-09 10:31:25",
      owner_info: {
        city_id: "prj-star_tr5",
        school_code: "prj",
        grade_level: null,
        school_class: null,
        class: null,
        class_no: null,
        fullname_c: "網絡學校計劃",
        fullname_e: "Network School Programme",
        nickname: null,
        email_address: "",
        status: 1,
        sch_level_id: 0,
        user_id: 200000002,
        roles: ["100000005"],
      },
      school: {
        name_e: "PROJECT TESTING, HKEDCITY",
        name_c: "教城專案測試學校",
        sch_type: "SEC",
        school_code: "prj",
      },
      feedback_status: "none",
      bca_code: "nsp2020",
      is_bca: 1,
      is_bca_mock: 0,
      is_brief_report: false,
      acl: [],
      status: {
        is_frozen: true,
        can_start: false,
        can_preview: true,
        can_view: true,
        can_modify: false,
        can_delete: false,
        can_assign: false,
        can_review: false,
        can_report: false,
        report_shared_num: 0,
        report_shared_accepted: false,
        can_publish: false,
        can_recall: false,
        can_share_paper: false,
        can_share_report: false,
        can_accept: true,
        can_reject: true,
        compiled_by: "others",
        submission: "ready",
      },
      tab: "nsp2020",
      type: "teacher_preset",
    },
    Number.MAX_SAFE_INTEGER
  );
  const state = PS.parseState(paper, "teacher");
  expect(state).toEqual<State>("teacherEditPreview");
});
test("teacher - should give edit/preview for preset paper", async() => {
  const paper = camelCase(
    {
      id: 1819,
      object_error_list: [],
      project: "star",
      user_id: 200000045,
      school_code: "prj",
      acayear: "",
      package_id: 13,
      source: 0,
      title: "#05 teacher preset paper",
      content: "",
      description: "",
      close_url: "",
      leaderboard_code: "",
      leaderboard_mode: "",
      report_mode: "last",
      start_time: "",
      end_time: "",
      publish_date: "",
      published: 1,
      bc_ver: "",
      attempted: 0,
      ended: 0,
      time_allowed: 0,
      time_bonus: 0,
      max_trial_no: 1,
      max_trial_score: 0,
      auto_save_interval: 60,
      submit_once: 1,
      cannot_go_prev: 0,
      force_answer: 0,
      show_feedback: 0,
      view_after_submit: 0,
      preserve_last_submit_ans: 1,
      suppress_media: 0,
      trials_assigned: 0,
      trials_submitted: 0,
      trials_marked: 0,
      trials_total: 0,
      sections: [
        {
          id: 1475,
          create_at: "2017-02-20 17:06:23",
          create_by: "hke-system",
          modify_at: "2017-02-20 17:06:23",
          modify_by: "hke-system",
          object_error_list: [],
          paper_id: 1819,
          seq: 1,
          title: "",
          content: "",
          no_of_questions: 4,
          suggested_time: 3240,
          mode: "sequential",
          criteria: "",
          setting: '{"qtiplayer":{"type":"qtiplayer","score":1}}',
          section_questions: [],
        },
      ],
      trials: [],
      owner_modify_at: "2017-02-20 17:06:23",
      owner_info: {
        city_id: "prj-star_tr1",
        school_code: "prj",
        grade_level: null,
        school_class: null,
        class: null,
        class_no: null,
        fullname_c: "預設評估",
        fullname_e: "Preset Papers",
        nickname: null,
        email_address: "",
        status: 1,
        sch_level_id: 0,
        user_id: 200000045,
        roles: ["100000005"],
      },
      school: {
        name_e: "PROJECT TESTING, HKEDCITY",
        name_c: "教城專案測試學校",
        sch_type: "SEC",
        school_code: "prj",
      },
      feedback_status: "none",
      bca_code: "",
      acl: [],
      status: {
        is_frozen: true,
        can_start: false,
        can_preview: true,
        can_view: true,
        can_modify: false,
        can_delete: false,
        can_assign: false,
        can_review: false,
        can_report: false,
        report_shared_num: 0,
        report_shared_accepted: false,
        can_publish: false,
        can_recall: false,
        can_share_paper: false,
        can_share_report: false,
        can_accept: true,
        can_reject: true,
        compiled_by: "others",
        submission: "ready",
      },
      tab: "teacher_preset",
      type: "teacher_preset",
    },
    Number.MAX_SAFE_INTEGER
  );
  const state = PS.parseState(paper, "teacher");
  expect(state).toEqual<State>("teacherEditPreview");
});
test("teacher - should give edit/preview for student-preset paper", async() => {
  const paper = camelCase(
    {
      id: 714,
      object_error_list: [],
      project: "star",
      user_id: 200002245,
      school_code: "prj",
      acayear: "",
      package_id: 13,
      source: 0,
      title: "#14 student preset paper",
      content: "",
      description: "using Q in pk 13",
      close_url: "",
      leaderboard_code: "",
      leaderboard_mode: "",
      report_mode: "last",
      start_time: "2023-10-05 00:00:00",
      end_time: "2099-12-31 00:00:00",
      publish_date: "2023-10-05 00:00:00",
      published: 1,
      bc_ver: "",
      attempted: 1,
      ended: 0,
      time_allowed: 0,
      time_bonus: 0,
      max_trial_no: 0,
      max_trial_score: 0,
      auto_save_interval: 60,
      submit_once: 1,
      cannot_go_prev: 0,
      force_answer: 0,
      show_feedback: 0,
      view_after_submit: 1,
      preserve_last_submit_ans: 0,
      suppress_media: 0,
      trials_assigned: 0,
      trials_submitted: 0,
      trials_marked: 0,
      trials_total: 0,
      sections: [
        {
          id: 622,
          create_at: "2017-02-16 15:13:55",
          create_by: "hke-system",
          modify_at: "2023-10-05 10:15:16",
          modify_by: "hke-system",
          object_error_list: [],
          paper_id: 714,
          seq: 1,
          title: "",
          content: "",
          no_of_questions: 1,
          suggested_time: 680,
          mode: "sequential",
          criteria: "",
          setting: '{"qtiplayer":{"type":"qtiplayer","score":1}}',
          section_questions: [],
        },
      ],
      trials: [],
      owner_modify_at: "2023-12-22 14:57:24",
      owner_info: {
        city_id: "prj-star_tr8",
        school_code: "prj",
        grade_level: null,
        school_class: null,
        class: null,
        class_no: null,
        fullname_c: "自學評估",
        fullname_e: "Student Corner",
        nickname: null,
        email_address: "",
        status: 1,
        sch_level_id: 0,
        user_id: 200002245,
        roles: ["100000005"],
      },
      school: {
        name_e: "PROJECT TESTING, HKEDCITY",
        name_c: "教城專案測試學校",
        sch_type: "SEC",
        school_code: "prj",
      },
      feedback_status: "none",
      bca_code: "",
      acl: [
        {
          id: 9403,
          create_at: "2017-02-16 15:13:56",
          create_by: "hke-system",
          modify_at: "2017-02-16 15:13:56",
          modify_by: "hke-system",
          object_error_list: [],
          project: "star",
          entity_type: "paper",
          entity_id: 714,
          function_type: "attempt",
          rule_set: "user",
          rule_type: "school_role",
          rule_value_1: "*-100000006",
          rule_value_2: "",
          rule_value_3: "",
          rule_value_4: "",
          status: "enabled",
          remarks: "",
        },
      ],
      status: {
        is_frozen: true,
        can_start: false,
        can_preview: true,
        can_view: true,
        can_modify: false,
        can_delete: false,
        can_assign: false,
        can_review: false,
        can_report: true,
        report_shared_num: 0,
        report_shared_accepted: true,
        can_publish: false,
        can_recall: false,
        can_share_paper: false,
        can_share_report: true,
        can_accept: false,
        can_reject: false,
        compiled_by: "others",
        submission: "ready",
      },
      tab: "student_preset",
      type: "student_preset",
    },
    Number.MAX_SAFE_INTEGER
  );
  const state = PS.parseState(paper, "teacher");
  expect(state).toEqual<State>("teacherEditPreview");
});
test("teacher - should give accept/reject for shared paper", async() => {
  const paper = camelCase(
    {
      id: 3843,
      object_error_list: [],
      project: "star",
      user_id: 0,
      school_code: "",
      acayear: "",
      package_id: 13,
      source: 100001371,
      title: "Super Task HKECL_TEST_AC1",
      content: "",
      description: "",
      close_url: "",
      leaderboard_code: "",
      leaderboard_mode: "",
      report_mode: "last",
      start_time: "",
      end_time: "",
      publish_date: "",
      published: 1,
      bc_ver: "bc_2000",
      attempted: 0,
      ended: 0,
      time_allowed: 0,
      time_bonus: 0,
      max_trial_no: 0,
      max_trial_score: 0,
      auto_save_interval: 60,
      submit_once: 1,
      cannot_go_prev: 0,
      force_answer: 0,
      show_feedback: 0,
      view_after_submit: 1,
      preserve_last_submit_ans: 1,
      suppress_media: 0,
      trials_assigned: 0,
      trials_submitted: 0,
      trials_marked: 0,
      trials_total: 0,
      sections: [
        {
          id: 3655,
          create_at: "2022-08-08 15:01:40",
          create_by: "hke-adrian-tr",
          modify_at: "2022-08-08 15:01:40",
          modify_by: "hke-adrian-tr",
          object_error_list: [],
          paper_id: 3843,
          seq: 1,
          title: "",
          content: "",
          no_of_questions: 1,
          suggested_time: 3600,
          mode: "sequential",
          criteria: "",
          setting: '{"qtiplayer":{"type":"qtiplayer","score":1}}',
          section_questions: [],
        },
      ],
      trials: [],
      owner_modify_at: "2021-10-08 10:52:13",
      owner_info: {
        city_id: "hke-adrian-tr",
        school_code: "hke",
        grade_level: null,
        school_class: null,
        class: null,
        class_no: null,
        fullname_c: "水埗鰂魚7",
        fullname_e: "English Man6",
        nickname: "水埗鰂魚涌ha",
        email_address: "",
        status: 1,
        sch_level_id: 0,
        user_id: 100001371,
        roles: ["100000005"],
      },
      feedback_status: "required",
      bca_code: "",
      acl: [],
      status: {
        is_frozen: false,
        can_start: false,
        can_preview: true,
        can_view: true,
        can_modify: false,
        can_delete: false,
        can_assign: false,
        can_review: false,
        can_report: false,
        report_shared_num: 0,
        report_shared_accepted: false,
        can_publish: false,
        can_recall: false,
        can_share_paper: true,
        can_share_report: false,
        can_accept: true,
        can_reject: true,
        compiled_by: "others",
        submission: "not_attempted",
      },
      tab: "shared",
    },
    Number.MAX_SAFE_INTEGER
  );
  const state = PS.parseState(paper, "teacher");
  expect(state).toEqual<State>("teacherShared");
});
test("teacher - should give preview/accept/rejct for shared REPORT that has been started", async() => {
  const paper = camelCase(
    {
      id: 4025,
      object_error_list: [],
      project: "star",
      user_id: 100001371,
      school_code: "hke",
      acayear: "2023/24",
      package_id: 13,
      source: 0,
      title: "HKECL_TEST_AC1 to ANA",
      content: "",
      description: "Iñtërnâtiônàlizætiøn☃💩 < ? > 香港字：𠝹𠸏𡁻𡃁𢭃𥄫𨋢",
      close_url: "",
      leaderboard_code: "",
      leaderboard_mode: "",
      report_mode: "last",
      start_time: "2023-09-21 16:30:00",
      end_time: "2024-08-30 23:50:00",
      publish_date: "2023-10-26 14:47:44",
      published: 1,
      bc_ver: "bc_2000",
      attempted: 1,
      ended: 0,
      time_allowed: 0,
      time_bonus: 0,
      max_trial_no: 0,
      max_trial_score: 0,
      auto_save_interval: 60,
      submit_once: 1,
      cannot_go_prev: 0,
      force_answer: 0,
      show_feedback: 0,
      view_after_submit: 1,
      preserve_last_submit_ans: 1,
      suppress_media: 0,
      trials_assigned: 0,
      trials_submitted: 0,
      trials_marked: 0,
      trials_total: 0,
      sections: [
        {
          id: 3837,
          create_at: "2022-10-27 12:37:12",
          create_by: "hke-adrian-tr",
          modify_at: "2023-09-21 16:30:39",
          modify_by: "hke-adrian-tr",
          object_error_list: [],
          paper_id: 4025,
          seq: 1,
          title: "",
          content: "",
          no_of_questions: 1,
          suggested_time: 3600,
          mode: "sequential",
          criteria: "",
          setting: '{"qtiplayer":{"type":"qtiplayer","score":1}}',
          section_questions: [],
        },
      ],
      trials: [],
      owner_modify_at: "2023-10-26 14:47:44",
      owner_info: {
        city_id: "hke-adrian-tr",
        school_code: "hke",
        grade_level: null,
        school_class: null,
        class: null,
        class_no: null,
        fullname_c: "水埗鰂魚7",
        fullname_e: "English Man6",
        nickname: "水埗鰂魚涌ha",
        email_address: "",
        status: 1,
        sch_level_id: 0,
        user_id: 100001371,
        roles: ["100000005"],
      },
      school: {
        name_e: "HONG KONG EDUCATION CITY SCHOOL",
        name_c: "香港教育城學校",
        sch_type: "SEC",
        school_code: "hke",
      },
      feedback_status: "pending",
      bca_code: "",
      acl: [
        {
          id: 8899,
          create_at: "2022-10-27 12:37:12",
          create_by: "hke-adrian-tr",
          modify_at: "2023-09-21 16:30:39",
          modify_by: "hke-adrian-tr",
          object_error_list: [],
          project: "star",
          entity_type: "paper",
          entity_id: 4025,
          function_type: "attempt",
          rule_set: "user",
          rule_type: "group",
          rule_value_1: "5872e9f22fec71_79561593",
          rule_value_2: "",
          rule_value_3: "",
          rule_value_4: "",
          status: "enabled",
          remarks: "",
        },
      ],
      status: {
        is_frozen: false,
        can_start: false,
        can_preview: true,
        can_view: true,
        can_modify: false,
        can_delete: false,
        can_assign: false,
        can_review: false,
        can_report: false,
        report_shared_num: 0,
        report_shared_accepted: false,
        can_publish: false,
        can_recall: false,
        can_share_paper: true,
        can_share_report: false,
        can_accept: true,
        can_reject: true,
        compiled_by: "others",
        submission: "attempted",
      },
      tab: "shared",
      type: "my",
    },
    Number.MAX_SAFE_INTEGER
  );
  const state = PS.parseState(paper, "teacher");
  expect(state).toEqual<State>("teacherShared");
});
