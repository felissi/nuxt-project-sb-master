import Item from "@/components/star/atom/MenuItem/Item.vue";

// @ts-ignore TS(2305) FIXME: Module '"@storybook/vue3-vite"' has no exported me... Remove this comment to see the full error message
import type { Meta, StoryObj } from "@storybook/vue3-vite";

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
  title: "Example/Item",
  component: Item,
  tags: ["autodocs"],
  argTypes: {
    // backgroundColor: {
    //   control: "color",
    // },
    // onClick: {},
    // size: {
    //   control: {
    //     type: "select",
    //   },
    //   options: ["small", "medium", "large"],
    // },
    variant: {
      control: {
        type: "select",
      },
      options: ["flat", "solid", "shadow", "bordered", "faded", "light"],
    },
    color: {
      control: {
        type: "select",
      },
      options: ["default", "primary", "secondary", "success", "warning", "danger"],
    },
  },
  // @ts-ignore TS(2304) FIXME: Cannot find name 'satisfies'.
} satisfies Meta<typeof Item>;

type Story = StoryObj<typeof Item>;

export const Primary: Story = {
  args: {
    // primary: true,
    size: "large",
    default: "Button",
  },
};
