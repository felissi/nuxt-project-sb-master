import { useRouteQuery } from "@vueuse/router";
import type { MaybeRefOrGetter, Ref } from "vue";
import { reactive, watch } from "vue";
import { z } from "zod";

type RouteOptions = Omit<NonNullable<Parameters<typeof useRouteQuery>[2]>, "transform">;
/**
 * defaultValue?: Record<string, MaybeRefOrGetter<string>>,\
 * options?: ReactiveRouteOptionsWithTransform<string, string>
 * @description This will allow user to inject any value to the variable,\
 * check out `useValidateSearch` for validating and limiting variable types.
 *
 * @example
 * const query = useSearchParams({
 *  key : 'value'
 * })
 * query.key.value = 'updated'
 *
 * @example
 * const { key } = useSearchParams({
 *  key : 'value'
 * })
 * key.value = 'updated'
 */
export function useSearchParams<T extends Record<string, MaybeRefOrGetter<any>>, B = never>(
  defaultValue?: T,
  options?: RouteOptions & {
    transform?: (fa: T) => B;
  }
): B;
export function useSearchParams<T extends Record<string, MaybeRefOrGetter<any>>>(
  defaultValue?: T,
  options?: RouteOptions
): {
  [K in keyof T]: Ref<T[K]>;
};

export function useSearchParams(defaultValue: any, options: any) {
  const r = {};
  Object.entries(defaultValue).forEach(([k, v]) => {
    // @ts-ignore TS(2345) FIXME: Argument of type 'unknown' is not assignable to pa... Remove this comment to see the full error message
    const _ = useRouteQuery(k, v, {
      mode: options?.mode,
      route: options?.route,
      router: options?.router,
    });
    // trigger the SET on the ref to update the url.
    watch(
      () => _.value,
      () => {
        // eslint-disable-next-line no-self-assign
        _.value = _.value;
      },
      { immediate: true }
    );
    Reflect.set(r, k, _);
  });
  const query = reactive(r);
  const transform = z
    .function()
    .catch(() => (_: any) => _)
    .parse(options?.transform);
  // Re-set the validated query
  Object.assign(query, transform(query));
  return query;
}
/**
 *
 * @see https://tanstack.com/router/v1/docs/guide/search-params
 */
export function useValidateSearch<T extends Record<string, MaybeRefOrGetter<string>>>(
  validateSearch?: T
): {
  [K in keyof T]: Ref<T[K]>;
} {
  // @ts-ignore TS(2322) FIXME: Type 'void' is not assignable to type '{ [K in key... Remove this comment to see the full error message
  return useSearchParams(validateSearch, { transform: ({}) => {} });
}
