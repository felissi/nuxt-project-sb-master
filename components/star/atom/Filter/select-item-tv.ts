import { tv } from "@/utils/tv";
import { type MultiSelectProps } from "primevue/multiselect";
import { type MenuProps } from "primevue/menu";
import { type ListboxProps } from "primevue/listbox";

// @ts-ignore TS(2614) FIXME: Module '"*.vue"' has no exported member 'Item'. Di... Remove this comment to see the full error message
import { type Item } from "./MultipleSelect.vue";

export type { MultiSelectProps, MenuProps, ListboxProps };
export type { Item };
export const selectItemPt = tv({
  slots: {
    leftIcon: "",
    text: "",
    rightIcon: "",
    menu: "hidden",
  },
  variants: {
    disabled: {
      true: "text-default-500",
    },
    focused: {},
    selected: {},
    visible: {},
    separator: {},
  },
  defaultVariants: {
    disabled: false,

    // @ts-ignore TS(2322) FIXME: Type 'false' is not assignable to type 'undefined'... Remove this comment to see the full error message
    focused: false,

    // @ts-ignore TS(2322) FIXME: Type 'false' is not assignable to type 'undefined'... Remove this comment to see the full error message
    selected: false,

    // @ts-ignore TS(2322) FIXME: Type 'true' is not assignable to type 'undefined'.
    visible: true,

    // @ts-ignore TS(2322) FIXME: Type 'false' is not assignable to type 'undefined'... Remove this comment to see the full error message
    separator: false,
  },
});
