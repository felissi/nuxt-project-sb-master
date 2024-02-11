import StarNavItem from "@/components/star/atom/SideNav/NavItem";
import type { Meta, StoryObj } from "@storybook/vue3";

const meta: Meta<typeof StarNavItem> = {
  title: "Example/StarNavItem",
  tags: ["autodocs"],

  // @ts-ignore TS(2560) FIXME: Value of type '(props: Record<string, any> & {}) =... Remove this comment to see the full error message
  component: StarNavItem,
};

export default meta;
type Story = StoryObj<typeof StarNavItem>;

const render: Story["render"] = (args, { argTypes }) => ({
  components: { StarNavItem },
  setup() {
    return { args };
  },
  template: `
    <StarNavItem unstyled>{{ args.default }}</StarNavItem>
  `,
});

export const Default: Story = {
  render,
  args: {
    // theme: 'default',
    // block:,
    //
    default: "Button",
  },
};
