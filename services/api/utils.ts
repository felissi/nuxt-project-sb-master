import * as R from "fp-ts/Record";
import * as A from "fp-ts/Array";
import { flow, pipe } from "fp-ts/function";
import { swap } from "fp-ts/Tuple";
import { ErrorResponse, SuccessResponse, PackageId } from "../models";

// @ts-ignore TS(2345) FIXME: Argument of type '<K extends string, A>(r: Record<... Remove this comment to see the full error message
const flipS = flow(R.toArray, A.map(swap), R.fromEntries);

export function triage<R>(res: Promise<ErrorResponse | SuccessResponse<R>>) {
  return res.then((_) => (_.success ? Promise.resolve(_.result) : Promise.reject(_.error)));
}
const packageIdMap: Record<"chinese" | "english" | "cmath" | "emath", PackageId> = {
  chinese: "13",
  english: "14",
  cmath: "15",
  emath: "16",
};
export function getPackageId(subject: keyof typeof packageIdMap): PackageId {
  return packageIdMap[subject];
}
export function getSubjectName(packageId: PackageId): keyof typeof packageIdMap {
  return pipe(packageIdMap, R.toArray, A.map(swap), R.fromEntries)[packageId];
}
