// @ts-ignore TS(2307) FIXME: Cannot find module 'change-case/keys' or its corre... Remove this comment to see the full error message
import * as changeCaseKeys from "change-case/keys";

/** To cast different cases, mostly knbab/snake to camel */

export type Head<T extends any[]> = T extends [infer H, ...any[]] ? H : never;
export type Tail<T extends any[]> = T extends [infer _, ...infer L] ? L : never;
export type Push<T extends any[], V> = [...T, V];

export type Split<S extends string, D extends string> = string extends S
  ? string[]
  : S extends ""
  ? []
  : S extends `${infer T}${D}${infer U}`
  ? [T, ...Split<U, D>]
  : [S];
export type TupleToString<T extends string[]> = T extends []
  ? ""
  : // @ts-ignore TS(2322) FIXME: Type 'Head<T>' is not assignable to type 'string |... Remove this comment to see the full error message
    `${Head<T>}${TupleToString<Tail<T>>}`;

export type CapitalizeT<T extends string[], R extends string[] = []> = T extends []
  ? R
  : // @ts-ignore TS(2344) FIXME: Type 'Tail<T>' does not satisfy the constraint 'st... Remove this comment to see the full error message
    CapitalizeT<Tail<T>, Push<R, Capitalize<Head<T>>>>;

export type KnbabToCamel<T extends string | number> = TupleToString<
  // @ts-ignore TS(2344) FIXME: Type '[Head<Split<T, "-">>, ...CapitalizeT<Tail<Sp... Remove this comment to see the full error message
  [Head<Split<T, "-">>, ...CapitalizeT<Tail<Split<T, "-">>>]
>;
export type KnbabToCamelS<T extends Record<string | number, any>> = {
  // @ts-ignore TS(2344) FIXME: Type 'K' does not satisfy the constraint 'string |... Remove this comment to see the full error message
  [K in keyof T as KnbabToCamel<K>]: T[K];
};

export function deeplyCamelize<T>(x: T): T {
  return changeCaseKeys.camelCase(x, Number.MAX_SAFE_INTEGER);
}
export function deeplySnakelize<T>(x: T): T {
  return changeCaseKeys.snakeCase(x, Number.MAX_SAFE_INTEGER);
}
