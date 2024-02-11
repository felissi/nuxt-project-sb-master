import type { Meta, StoryObj } from "@storybook/vue3";
import DateTime from "~/components/star/atom/Card/CardDateTime.vue";

/**
 * This address the layout and order of the buttons.
 */
const meta: Meta<typeof DateTime> = {
  title: "Components/Card/CardDateTime",
  tags: ["autodocs"],
  component: DateTime,
};

export default meta;
type Story = StoryObj<typeof DateTime>;

const ListTemplate: Story = {
  render: (args) => ({
    components: { DateTime },
    setup() {
      return { ...args };
    },
    template: `
        <div class="flex gap-4">
          <template v-for="item in items">
            <DateTime v-bind="item"/>
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
];

// export const Default: Story = {
//   ...ListTemplate,
//   args: {
//     items: actions.map((action) => ({ action })) satisfies Story["args"][],
//   },
// };
export const Default: Story = {
  args: {
    actions: ["accept", "attempt", "edit"],
  },
};
export const Chinese: Story = {
  ...ListTemplate,
  args: {
    // @ts-ignore TS(18004) FIXME: No value exists in scope for the shorthand propert... Remove this comment to see the full error message
    items: actions.map((action) => ({ action, locale: "zh" })) satisfies Story["args"][],
  },
};
