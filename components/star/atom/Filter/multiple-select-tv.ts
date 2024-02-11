import { tv } from "@/utils/tv";
import { type MultiSelectProps } from "primevue/multiselect";
import { type MenuProps } from "primevue/menu";
import { type ListboxProps } from "primevue/listbox";

export type { MultiSelectProps, MenuProps, ListboxProps };

export const multiSelectPt = tv({
  slots: {
    root: "px-3 border-none focus:shadow-[0_0_2px_0_#fff,0_0_4px_0_var(--sui-color-primary-400)]",
    header: "hidden",
    trigger: "w-fit pl-1",
    label: "p-0",
    labelContainer: "flex items-center",
    // @ts-ignore TS(18004) FIXME: No value exists in scope for the shorthand propert... Remove this comment to see the full error message
  } satisfies MultiSelectProps["pt"],
  variants: {
    disabled: {
      root: "",
    },
    // @ts-ignore TS(18004) FIXME: No value exists in scope for the shorthand propert... Remove this comment to see the full error message
  } satisfies MultiSelectProps,
  defaultVariants: {
    // @ts-ignore TS(2322) FIXME: Type 'false' is not assignable to type '"root"'.
    disabled: false,
  },
});
export const menuPt = tv({
  slots: {
    root: "p-0",
    // @ts-ignore TS(2345) FIXME: Argument of type '{ slots: { root: string; }; sati... Remove this comment to see the full error message
  } satisfies MenuProps["pt"],
});
export const listboxPt = tv({
  slots: {
    root: "",
    wrapper: "p-2",
    item: "py-0.5 px-4 data-[p-highlight=true]:bg-default-100",
    // @ts-ignore TS(2345) FIXME: Argument of type '{ slots: { root: string; wrapper... Remove this comment to see the full error message
  } satisfies ListboxProps["pt"],
});
