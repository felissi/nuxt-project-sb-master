import * as O from "fp-ts/Option";
import { pipe } from "fp-ts/function";
import { useQuery } from "vue-query";
import type { UseQueryOptions, UseQueryReturnType } from "vue-query";
import { $http } from "../axios";
import type {
  User, jwtResponse, jwtResult, Error,
} from "../models";

export function jwtQuery() {
  // return $http
  //   .get("/jwt.php")
  //   .then((_) => _.data)
  //   .then((_) => (_.success ? Promise.resolve(_.result) : Promise.reject(_.error)));
}
export function useJwtQuery<TOption extends UseQueryOptions<jwtResult, Error, jwtResult, string[]>>(
  options?: TOption
) {
  return useQuery(["jwt"], jwtQuery );
}
// export function isTeacher(user: User): boolean {
//   return pipe(
//     user?.roles,
//     O.fromNullable,
//     O.map((_) => _ === "100000005"),
//     O.getOrElse(() => false)
//   );
// }
export function useJwt(): UseQueryReturnType<string, Error> {
  // @ts-ignore TS(2322) FIXME: Type 'UseQueryReturnType<jwtResult, Error, QueryOb... Remove this comment to see the full error message
  return useJwtQuery({ select: (_) => _.token });
}
export function useUser()  {
  // @ts-ignore TS(2322) FIXME: Type 'UseQueryReturnType<jwtResult, Error, QueryOb... Remove this comment to see the full error message
  // return useJwtQuery({ select: (_) => _.payload.user });
}
