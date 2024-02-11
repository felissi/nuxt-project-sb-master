import * as O from "fp-ts/Option";
import { pipe } from "fp-ts/function";
import { useQuery } from "vue-query";
import type { UseQueryOptions, UseQueryReturnType } from "vue-query";
import { computed } from "vue";
import { z } from "zod";
import { academicYearZ, packageIdZ, teacherPaperTypeZ } from "../models";
import type { TeacherPaper, Error } from "../models";
import { $http } from "../axios";
import { useJwt } from "./jwt";
import { useLoadMetaQuery } from "./load-meta";

const loadTeacherPaperParams = z
  .object({
    id: z.number().array().optional(),
    packageId: packageIdZ.array().optional(),
    acayear: academicYearZ.array().optional(),
    type: teacherPaperTypeZ.default("my"),
  })
  .optional();
export type LoadTeacherPaperParams = z.infer<typeof loadTeacherPaperParams>;

export function loadTeacherPaperQuery({
  token,

  // @ts-ignore TS(2741) FIXME: Property 'type' is missing in type '{}' but requir... Remove this comment to see the full error message
  para = {},
}: {
  token: string;
  para?: LoadTeacherPaperParams;
}): Promise<TeacherPaper> {
  return $http
    .post("/api.php?action=load_teacher_paper", {
      token,
      para: loadTeacherPaperParams.parse(para),
    })
    .then((_) => _.data)
    .then((_) => (_.success ? Promise.resolve(_.result) : Promise.reject(_.error))) as unknown as Promise<TeacherPaper>;
}
export function useLoadTeacherPaperQuery<
  TOption extends UseQueryOptions<TeacherPaper, Error, TeacherPaper, string[]>
>(options?: TOption) {
  const { data: token } = useJwt();
  const { data: meta } = useLoadMetaQuery();

  // @ts-ignore TS(2322) FIXME: Type 'string | undefined' is not assignable to typ... Remove this comment to see the full error message
  return useQuery(["loadTeacherPaper"], () => loadTeacherPaperQuery({ token: token.value }), {
    enabled: computed(() => !!meta.value && !!token.value),
    ...options,
  });
}
type LoadTeacherFetch = (args: { token: string }) => Promise<TeacherPaper>;
export const loadTeacherPaperMyQuery: LoadTeacherFetch = ({ token }) => {
  return loadTeacherPaperQuery({ token, para: { type: "my" } });
};
export const loadTeacherPaperTeacherPresetQuery: LoadTeacherFetch = ({ token }) => {
  return loadTeacherPaperQuery({ token, para: { type: "teacher_preset" } });
};
export const loadTeacherPaperStudentPresetQuery: LoadTeacherFetch = ({ token }) => {
  return loadTeacherPaperQuery({ token, para: { type: "student_preset" } });
};
