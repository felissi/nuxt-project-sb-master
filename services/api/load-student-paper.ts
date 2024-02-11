import * as O from "fp-ts/Option";
import { pipe } from "fp-ts/function";
import { useQuery } from "vue-query";
import type { UseQueryOptions, UseQueryReturnType } from "vue-query";
import { computed } from "vue";
import { z } from "zod";
import { useJwt } from "./jwt";
import { useLoadMetaQuery } from "./load-meta";
import { $http } from "../axios";
import {
  StudentPaper, Error, academicYearZ, packageIdZ, studentPaperTypeZ,
} from "../models";

const loadStudentPaperParams = z.object({
  id: z.number().array().optional(),
  packageId: packageIdZ.array().optional(),
  acayear: academicYearZ.array().optional(),
  type: studentPaperTypeZ.default("teacher"),
});
export type LoadStudentPaperParams = z.infer<typeof loadStudentPaperParams>;
export function loadStudentPaperQuery({
  token,

  // @ts-ignore TS(2741) FIXME: Property 'type' is missing in type '{}' but requir... Remove this comment to see the full error message
  para = {},
}: {
  token: string;
  para?: LoadStudentPaperParams;
}): Promise<StudentPaper> {
  return $http
    .post("/api.php?action=load_student_paper", {
      token,
      para: loadStudentPaperParams.parse(para),
    })
    .then((_) => _.data)
    .then((_) => (_.success ? Promise.resolve(_.result) : Promise.reject(_.error)));
}
export function useLoadStudentPaperQuery<
  TOption extends UseQueryOptions<StudentPaper, Error, StudentPaper, string[]>
>(options?: TOption) {
  const { data: token } = useJwt();
  const { data: meta } = useLoadMetaQuery();

  // @ts-ignore TS(2322) FIXME: Type 'string | undefined' is not assignable to typ... Remove this comment to see the full error message
  return useQuery(["loadStudentPaper"], () => loadStudentPaperQuery({ token: token.value }), {
    enabled: computed(() => !!meta.value),
    ...options,
  });
}
