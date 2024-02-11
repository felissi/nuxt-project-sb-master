import type { Meta, StoryObj } from "@storybook/vue3";
import CardButton from "@/components/star/atom/Card/CardButton.vue";

const meta: Meta<typeof CardButton> = {
  title: "Components/Card/CardButton",
  tags: ["autodocs"],
  component: CardButton,
};

export default meta;
type Story = StoryObj<typeof CardButton>;

const ListTemplate: Story = {
  render: (args) => ({
    components: { CardButton },
    setup() {
      return { ...args };
    },
    template: `
        <div class="flex gap-4">
          <template v-for="item in items">
            <CardButton v-bind="item"/>
          </template>
        </div>
    `,
  }),
};

// @ts-ignore TS(2339) FIXME: Property 'action' does not exist on type 'Partial<... Remove this comment to see the full error message
const actions: NonNullable<Story["args"]>["action"][] = [
  "accept",
  "attempt",
  "edit",
  "preview",
  "reject",
  "report",
  "retry",
  "share",
  "review",
];

export const Default: Story = {
  ...ListTemplate,
  args: {
    // @ts-ignore TS(18004) FIXME: No value exists in scope for the shorthand propert... Remove this comment to see the full error message
    items: actions.map((action) => ({ action })) satisfies Story["args"][],
  },
};
export const Chinese: Story = {
  ...ListTemplate,
  args: {
    // @ts-ignore TS(18004) FIXME: No value exists in scope for the shorthand propert... Remove this comment to see the full error message
    items: actions.map((action) => ({ action, locale: "zh" })) satisfies Story["args"][],
  },
};
