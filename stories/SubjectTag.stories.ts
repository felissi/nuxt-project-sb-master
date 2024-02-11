import type { Meta, StoryObj } from "@storybook/vue3";
import { SubjectTag } from "@/components/star";
import { ExtractPublicPropTypes } from "vue";

// @ts-ignore TS(2305) FIXME: Module '"@/components/star"' has no exported membe... Remove this comment to see the full error message
import type { SubjectTagProps } from "@/components/star";

/**
 *
 * */
const meta: Meta<typeof SubjectTag> = {
  title: "Components/Tag/SubjectTag",
  tags: ["autodocs"],
  component: SubjectTag,
};

export default meta;
type Story = StoryObj<typeof SubjectTag>;

const ListTemplate: Story = {
  render: (args) => ({
    components: { SubjectTag },
    setup() {
      return { ...args };
    },
    template: `
        <div class="flex gap-4">
          <template v-for="item in items">
            <SubjectTag v-bind="item"/>
          </template>
        </div>
    `,
  }),
};

// @ts-ignore TS(2339) FIXME: Property 'packageId' does not exist on type 'Parti... Remove this comment to see the full error message
const packageIds: NonNullable<Story["args"]>["packageId"][] = [13, 14, 15, 16];
type t1 = ExtractPublicPropTypes<typeof SubjectTag>;
export const Default: Story = {
  args: {},
};
export const WithLocale: Story = {
  ...ListTemplate,
  args: {
    items: packageIds.map((packageId) => ({ packageId })),
  },
};
