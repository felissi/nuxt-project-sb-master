import type { ButtonProps } from "primevue/button";
import PButton from "primevue/button";
import { defineComponent } from "vue";

console.log("🚀 ~ file: NavItem.tsx:3 ~ PButton:", PButton);
// import { PButton } from '../../../../.nuxt/components';

// export default defineComponent({
//   name: "StarNavItem",
//   props: PButton.extends.props as unknown as ButtonProps,
//   // extends: PButton,
//   setup(props, { slots }) {
//     return () => (
//       // <PButton>abc</PButton>
//       <div>abc</div>
//     );
//   },
// });
type Props = ButtonProps

// @ts-ignore TS(2769) FIXME: No overload matches this call.
export default defineComponent(

  // @ts-ignore TS(2322) FIXME: Type 'VNodeNormalizedChildren | undefined' is not ... Remove this comment to see the full error message
  (props: Props, { slots }) => () => <PButton {...props} label={slots?.default?.()?.[0]?.children}></PButton>,
  {
    name: "StarNavItem",

    // @ts-ignore TS(2339) FIXME: Property 'extends' does not exist on type 'typeof ... Remove this comment to see the full error message
    props: PButton.extends.props as unknown as Props,
  }
);
