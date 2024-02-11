import { expect, test } from "vitest";
import { tv } from "@/utils/tv";
import {
  computed, reactive, defineComponent, h,
} from "vue";
import { mount } from "@vue/test-utils";

// @ts-ignore TS(1192) FIXME: Module '"C:/Users/user/Desktop/js-practice/nuxt-pr... Remove this comment to see the full error message
import Header from "~/components/star/atom/Header";
import * as PT from "./usePassThrough";

const myTv = tv({
  slots: {
    base: "base-1",
    slot1: "slot1",
    slot2: "slot2",
  },
  variants: {
    something: {
      small: {
        slot1: "something-small",
      },
    },
  },
});
const myTv2 = tv({
  slots: {
    base: "base-2",
  },
  variants: {
    something: {
      small: {
        slot1: "tv2",
      },
    },
  },
});
const baseSlot1 = myTv.slots;

test("should give the style if no props provided", async() => {
  const onlyVariant = {
    something: "small",
  };

  // @ts-ignore TS(2554) FIXME: Expected 2-3 arguments, but got 1.
  const newTv = PT.read(myTv);
  expect(newTv()).toEqual(baseSlot1);
});

test("should read variants from props", async() => {
  const onlyVariant = {
    something: "small",
  };

  // @ts-ignore TS(2345) FIXME: Argument of type 'TVReturnType<{ something: { smal... Remove this comment to see the full error message
  const newTv = PT.read(myTv, onlyVariant);
  expect(newTv()).toEqual({
    base: "base-1",
    slot1: "slot1 something-small",
    slot2: "slot2",
  });
});

test("should read slots from props ", async() => {
  const propsWithOnlySlot = {
    pt: {
      slot1: "pass-thorugh-slot-1",
    },
  };

  // @ts-ignore TS(2345) FIXME: Argument of type 'TVReturnType<{ something: { smal... Remove this comment to see the full error message
  const newTv = PT.read(myTv, propsWithOnlySlot);
  expect(newTv()).toEqual({
    base: "base-1",
    slot1: "slot1 pass-thorugh-slot-1",
    slot2: "slot2",
  });
});

test("should read both variants and slots from props ", async() => {
  const props = {
    something: "small",
    pt: {
      slot1: "pass-thorugh-slot-1",
    },
  };

  // @ts-ignore TS(2345) FIXME: Argument of type 'TVReturnType<{ something: { smal... Remove this comment to see the full error message
  const newTv = PT.read(myTv, props);
  expect(newTv()).toEqual({
    base: "base-1",
    slot1: "slot1 pass-thorugh-slot-1 something-small",
    slot2: "slot2",
  });
});

test("should ignore other props ", async() => {
  const props = {
    other: "other",
  };

  // @ts-ignore TS(2345) FIXME: Argument of type 'TVReturnType<{ something: { smal... Remove this comment to see the full error message
  const newTv = PT.read(myTv, props);
  expect(newTv()).toEqual(baseSlot1);
});

test("should return base style from empty props", async() => {
  // @ts-ignore TS(2345) FIXME: Argument of type 'TVReturnType<{ something: { smal... Remove this comment to see the full error message
  const newTv = PT.read(myTv, {});
  expect(newTv()).toEqual(baseSlot1);
});

test("should return base style from empty props (with usePassThrough)", async() => {
  const slotStyles = PT.usePassThrough(myTv, {}).value;
  expect(slotStyles).toEqual(baseSlot1);
});
test("should return base style from undefined props (with usePassThrough)", async() => {
  // @ts-ignore TS(2345) FIXME: Argument of type 'undefined' is not assignable to ... Remove this comment to see the full error message
  const slotStyles = PT.usePassThrough(myTv, undefined).value;
  expect(slotStyles).toEqual(baseSlot1);
});

test("test reactive", async() => {
  const comp = defineComponent(
    (props) => {
      const pt = PT.usePassThrough(myTv, props);
      return () => h("div", { test: JSON.stringify(pt, null, 2) }, props.role);
    }
    // { role: "teacher" }
  );
  const wrapper = mount(comp, {
    props: {
      role: "teacher",
      pt: {
        base: "qweqwe",
      },
    },
  });
  expect(JSON.parse(wrapper.attributes().test)._value).toEqual({
    base: "base-1 qweqwe",
    slot1: "slot1",
    slot2: "slot2",
  });
  wrapper.setProps({
    pt: {
      base: "second-prop",
    },
  });
  expect(JSON.parse(wrapper.attributes().test)._value).toEqual({
    base: "base-1 second-prop",
    slot1: "slot1",
    slot2: "slot2",
  });
});
test("should be fine using different pass through property name, like cx, classNames", async() => {
  const cx1Props = {
    cx: {
      p1: "cx1-p1",
      p2: "cx1-p2",
      base: "cx1-base",
      slot1: "cx1-slot1",
      slot2: "cx1-slot2",
    },
  };

  // @ts-ignore TS(2345) FIXME: Argument of type 'TVReturnType<{ something: { smal... Remove this comment to see the full error message
  const newTv = PT.read(myTv, cx1Props, "cx");
  expect(newTv()).toEqual({
    p1: "cx1-p1",
    p2: "cx1-p2",
    base: "base-1 cx1-base",
    slot1: "slot1 cx1-slot1",
    slot2: "slot2 cx1-slot2",
  });
});

test("should handle tv struct", async() => {
  const struct = {
    test1: myTv,
    test2: myTv2,
  };
  const props = {
    somethingElse: "abc",
    test1: {
      slot1: "prop-slot1",
    },
    test2: {
      base: "prop-base",
    },
  };

  // @ts-ignore TS(2559) FIXME: Type '{ somethingElse: string; test1: { slot1: str... Remove this comment to see the full error message
  expect(PT.usePassThroughS(struct, props).value).toEqual({
    test1: {
      base: "base-1",
      slot1: "slot1 prop-slot1",
      slot2: "slot2",
    },
    test2: {
      base: "base-2 prop-base",
    },
  });
});

test("handle tv struct with empty props (with usePassThroughS)", async() => {
  const struct = {
    test1: myTv,
    test2: myTv2,
  };
  const props = {};
  expect(PT.usePassThroughS(struct, props).value).toEqual({
    test1: {
      base: "base-1",
      slot1: "slot1",
      slot2: "slot2",
    },
    test2: {
      base: "base-2",
    },
  });
});

test("handle tv struct with undefined props (with usePassThroughS)", async() => {
  const struct = {
    test1: myTv,
    test2: myTv2,
  };
  const props = undefined;

  // @ts-ignore TS(2345) FIXME: Argument of type 'undefined' is not assignable to ... Remove this comment to see the full error message
  expect(PT.usePassThroughS(struct, props).value).toEqual({
    test1: {
      base: "base-1",
      slot1: "slot1",
      slot2: "slot2",
    },
    test2: {
      base: "base-2",
    },
  });
});

test("test computedWithReactive with no watcher options", async() => {
  const props = reactive({
    prop1: "prop1",
  });
  expect(
    PT.computedWithReactive(
      () => props,
      () => "result"
    ).value
  ).toBe("result");
});

test("should treat passthorugh classes over the variants", async() => {
  const props = reactive({
    prop1: "prop1",
    something: "small",
  });
  expect(
    PT.computedWithReactive(
      () => props,
      () => "result"
    ).value
  ).toBe("result");
});
test("should be able to inject/overwrite classes", async() => {
  const _tv = tv({
    slots: {
      root: "h-20 w-64 p-5 border rounded-medium",
      wrapper: "flex gap-4",
      iconWrapper: "w-10 h-10 flex items-center justify-center bg-default-100 rounded-medium",
      icon: "w-6 h-6",
      body: "flex justify-center flex-col",
      title: "font-semibold",
      description: "text-base",
    },
    variants: {
      variant: {
        default: {},
      },
    },
  });
  const props = {
    pt: {
      root: "border-none",
      iconWrapper: "bg-red-900",
      wrapper: "[&_*]:text-inherit text-default-600",
      // @ts-ignore TS(18004) FIXME: No value exists in scope for the shorthand propert... Remove this comment to see the full error message
    } satisfies Partial<(typeof _tv)["slots"]>,
  };

  // @ts-ignore TS(2345) FIXME: Argument of type 'TVReturnType<{ variant: { defaul... Remove this comment to see the full error message
  const classFn = PT.read(_tv, props);
  expect(classFn()).toEqual<(typeof _tv)["slots"]>({
    root: "h-20 w-64 p-5 border rounded-medium border-none",
    wrapper: "flex gap-4 [&_*]:text-inherit text-default-600", // just join
    iconWrapper: "w-10 h-10 flex items-center justify-center rounded-medium bg-red-900", // overwritten background
    icon: "w-6 h-6",
    body: "flex justify-center flex-col",
    title: "font-semibold",
    description: "text-base",
  });
});
test("should response to props change", async() => {
  const optionItem = tv({
    slots: {
      root: "h-20 min-w-[256px] p-5 border rounded-medium",
      wrapper: "flex gap-4",
      iconWrapper:
        "min-w-[40px] min-h-[40px] w-10 h-10 flex items-center justify-center bg-default-100 rounded-medium",
      icon: "w-6 h-6",
      body: "flex justify-center flex-col",
      title: "font-semibold text-left",
      description: "text-sm text-left",
    },
    variants: {
      variant: {
        default: {},
      },
    },
  });

  const paperTabItem = tv({
    extend: optionItem,
    variants: {
      isSelected: {
        true: {
          root: "border-none",
        },
        false: {
          root: "border-none",
          iconWrapper: "bg-default-200",
          wrapper: "[&_*]:text-inherit text-default-600",
        },
      },
    },
    defaultVariants: {
      isSelected: false,
    },
  });
  const props = reactive({
    isSelected: false,
  });

  // @ts-ignore TS(2559) FIXME: Type '{ isSelected: boolean; }' has no properties ... Remove this comment to see the full error message
  const pt = PT.usePassThrough(paperTabItem, props);
  expect(pt.value).toStrictEqual({
    base: undefined,
    body: "flex justify-center flex-col",
    description: "text-sm text-left",
    icon: "w-6 h-6",
    iconWrapper:
      "min-w-[40px] min-h-[40px] w-10 h-10 flex items-center justify-center rounded-medium bg-default-200",
    root: "h-20 min-w-[256px] p-5 border rounded-medium border-none",
    title: "font-semibold text-left",
    wrapper: "flex gap-4 [&_*]:text-inherit text-default-600", // this should change
  });
  // Changing of the property of props should trigger the pt change.
  props.isSelected = true;
  expect(pt.value).toStrictEqual({
    base: undefined,
    body: "flex justify-center flex-col",
    description: "text-sm text-left",
    icon: "w-6 h-6",
    iconWrapper:
      "min-w-[40px] min-h-[40px] w-10 h-10 flex items-center justify-center bg-default-100 rounded-medium",
    root: "h-20 min-w-[256px] p-5 border rounded-medium border-none",
    title: "font-semibold text-left",
    wrapper: "flex gap-4",
  });
});
