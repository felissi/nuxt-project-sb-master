import type { Meta, StoryObj } from "@storybook/vue3";
import { StarButton } from "~/components/star";

const meta: Meta<typeof StarButton> = {
  title: "Components/Tooltip",
  tags: ["autodocs"],
  component: StarButton,
};

export default meta;
type Story = StoryObj<typeof StarButton>;

const ListTemplate: Story = {
  render: (args) => ({
    components: { StarButton },
    setup() {
      return { ...args };
    },
    template: `
        <div class="flex gap-4">
          <template v-for="item in items">
            <StarButton v-bind="item"/>
          </template>
        </div>
    `,
  }),
};

type TooltipPt = {
  root: string;
  arrow: string;
  text: string;
};

const Comp: Story = {
  render: (args) => ({
    setup: () => {
      args;
    },
    template: `<div id="pv_id_8_tooltip" role="tooltip" style="display: inline-block; width: fit-content; pointer-events: none; opacity: 1.028; z-index: 1008;" class="p-tooltip p-component p-tooltip-bottom ${
      // @ts-ignore TS(2339) FIXME: Property 'pt' does not exist on type 'AllowNonFunc... Remove this comment to see the full error message
      args.pt?.root ?? ""
    }" data-pc-name="tooltip" data-pc-section="root" data-p-position="bottom">
      // @ts-ignore TS(2339): Property 'pt' does not exist on type 'AllowNonFunc... Remove this comment to see the full error message
      // @ts-ignore TS(2339) FIXME: Property 'pt' does not exist on type 'AllowNonFunc... Remove this comment to see the full error message
      <div class="p-tooltip-arrow ${args.pt?.arrow ?? ""}" data-pc-section="arrow"></div>
      // @ts-ignore TS(2339): Property 'pt' does not exist on type 'AllowNonFunc... Remove this comment to see the full error message
      // @ts-ignore TS(2339) FIXME: Property 'pt' does not exist on type 'AllowNonFunc... Remove this comment to see the full error message
      <div class="p-tooltip-text ${args.pt?.text ?? ""}" data-pc-section="text">Actions</div>
    </div>`,
  }),
};
export const Template: Story = {
  render: (args) => ({
    setup: () => args,
    template: `<div id="pv_id_8_tooltip" role="tooltip" style="display: inline-block; width: fit-content; pointer-events: none; opacity: 1.028; z-index: 1008;" class="p-tooltip p-component p-tooltip-bottom" data-pc-name="tooltip" data-pc-section="root" data-p-position="bottom">
      <div class="p-tooltip-arrow border-b-gray-950" style="top:0;left:50%" data-pc-section="arrow"></div>
      <div class="p-tooltip-text text-sm bg-gray-950 px-3 py-1.5 rounded-[8px]" data-pc-section="text">Actions</div>
    </div>`,
  }),
  args: {
    // model: [{ action: "edit" }, { action: "preview" }, { action: "share" }],
    state: "teacherDraft",
  },
};
export const Try: Story = {
  ...Comp,
  args: {
    // pt: {
    //   text: "bg-red-900",
    // },
  },
};
export const Try2: Story = {
  render: (args) => ({
    components: { StarButton },
    setup() {
      return { ...args };
    },
    template: `

            <StarButton v-tooltip="{value: 'lorem ipsum', hideDelay: 999999}" label="Button" />
            
    `,
  }),
  args: {
    // pt: {
    //   text: "bg-red-900",
    // },
  },
};
export const Default: Story = {
  render: (args) => ({
    components: { StarButton },
    setup: () => args,
    template: `
            <StarButton v-tooltip="'lorem ipsum'" label="Button" />
    `,
  }),
};
export const Top: Story = {
  render: (args) => ({
    components: { StarButton },
    setup: () => args,
    template: `
            <StarButton v-tooltip.top="'lorem ipsum'" label="Button" />
    `,
  }),
};
export const Bottom: Story = {
  render: (args) => ({
    components: { StarButton },
    setup: () => args,
    template: `
            <StarButton v-tooltip.bottom="'lorem ipsum'" label="Button" />
    `,
  }),
};
export const Left: Story = {
  render: (args) => ({
    components: { StarButton },
    setup: () => args,
    template: `
            <StarButton v-tooltip.left="'lorem ipsum'" label="Button" />
    `,
  }),
};
export const Right: Story = {
  render: (args) => ({
    components: { StarButton },
    setup: () => args,
    template: `
            <StarButton v-tooltip.right="'lorem ipsum'" label="Button" />
    `,
  }),
};
