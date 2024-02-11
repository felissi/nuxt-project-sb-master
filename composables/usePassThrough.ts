import { tv } from "@/utils/tv";
import type { TVReturnType } from "tailwind-variants";
import { sequence } from "fp-ts/Record";
import * as IO from "fp-ts/IO";
import { pipe } from "fp-ts/function";
import {
  reactive,
  ref,
  watch,
  type Ref,
  type WatchOptions,
  type WatchSource,
  ComputedGetter,
} from "vue";
import { computedWithControl } from "@vueuse/core";

type BaseTV = TVReturnType<any, any, any, any, any, any, any>;

/**
 * To compute with reactive like props.
 * @param source variable, getter function, or array of that
 * @param f computed as function
 * @param options watcher options
 */
export function computedWithReactive<G, P>(
  source: WatchSource<P> | WatchSource<P>[] | P | P[],
  f: ComputedGetter<G>,
  options?: WatchOptions
): Ref<G> {
  const defaultOptions: typeof options = {
    deep: true,
  };

  // @ts-ignore TS(2769) FIXME: No overload matches this call.
  const result: Ref<G> = computedWithControl(source, f);
  watch(
    // @ts-ignore TS(2769) FIXME: No overload matches this call.
    source,
    () => {
      result.value = f();
    },
    {
      ...defaultOptions,
      ...(options ?? {}),
    }
  );
  return result;
}

/** The pass through name to go through component tree,
 * eg. classNames, cx, css, etc
 */
type PassThroughPropsType<S, K extends string | number | symbol = "pt"> = Partial<Record<K, S>>;

/** Read slot from props */
export function extend<
  T extends BaseTV,
  K extends string | number | symbol = "pt",
  // @ts-ignore TS(2706) FIXME: Required type parameters may not follow optional t... Remove this comment to see the full error message
  P extends PassThroughPropsType<T["slots"], K>
>(
  style: T,
  props: P,
  /** the pass through key property name */
  key: K
) {
  return tv({
    extend: style,
    slots: props?.[key] as T["slots"],
  });
}
export const evaluate = sequence(IO.io);

/** Read slots and variants from props, with slots go first */
export function read<
  T extends BaseTV,
  K extends string | number | symbol = "pt",
  // @ts-ignore TS(2706) FIXME: Required type parameters may not follow optional t... Remove this comment to see the full error message
  P extends PassThroughPropsType<T["slots"], K>
>(
  style: T,
  props: P,
  /** the pass through property name,
   * set default here because of testing and historical reason
   *  @default pt
   * */

  // @ts-ignore TS(2322) FIXME: Type 'string' is not assignable to type 'K'.
  key: K = "pt"
): IO.IO<T["slots"]> {
  /** variants should be read before the props,
   *  as the passthrough props is the most utilizable */
  return pipe(
    extend(style, props, key), // read the passthrough props

    // @ts-ignore TS(2345) FIXME: Argument of type 'P' is not assignable to paramete... Remove this comment to see the full error message
    (fn) => fn(props) as Record<string, IO.IO<string>>, // apply variants from props
    (r) => {
      if (!r) console.warn("your slots is probably empty");
      return r;
    },
    evaluate // sequence Record<string, IO<string>> into IO<Record<string,string>>
  );
}
export function usePassThroughS<
  T extends Record<string, { slots: any }>,
  K extends string | number | symbol = "pt",
  // @ts-ignore TS(2706) FIXME: Required type parameters may not follow optional t... Remove this comment to see the full error message
  P extends PassThroughPropsType<Partial<T["slots"]>, K>
>(
  style: T,
  props: P,

  // @ts-ignore TS(2322) FIXME: Type 'string' is not assignable to type 'K'.
  key: K = "pt"
): Ref<{
  [N in keyof T]: T[N]["slots"];
}> {
  // @ts-ignore TS(2322) FIXME: Type 'Ref<{ [k: string]: any; }>' is not assignabl... Remove this comment to see the full error message
  return computedWithReactive(props, () => Object.fromEntries(
    Object.entries(style).map(([slotName, t]) => {
      // @ts-ignore TS(2345) FIXME: Argument of type '{ slots: any; }' is not assignab... Remove this comment to see the full error message
      return [slotName, read(t, props, slotName)()];
    })
  ));
}

export function usePassThrough<
  T extends { slots: any },
  K extends string | number | symbol = "pt",
  // @ts-ignore TS(2706) FIXME: Required type parameters may not follow optional t... Remove this comment to see the full error message
  P extends PassThroughPropsType<Partial<T["slots"]>, K>
  // @ts-ignore TS(2322) FIXME: Type 'string' is not assignable to type 'K'.
>(style: T, props: P, key: K = "pt"): Ref<T["slots"]> {
  // return computedWithReactive(props, read(style, props, key));
  return computedWithReactive(props, () => {
    // @ts-ignore TS(2345) FIXME: Argument of type 'T' is not assignable to paramete... Remove this comment to see the full error message
    return read(style, props, key)();
  });
}

// declare const t:TVReturnType<'variants','slots','base','config','e','f','extend'>

export function isTv(style: unknown): style is BaseTV {
  // @ts-ignore TS(2571) FIXME: Object is of type 'unknown'.
  return style.constructor === tv({}).constructor;
}
