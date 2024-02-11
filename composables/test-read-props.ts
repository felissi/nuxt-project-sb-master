import { watch } from "vue";
import { read } from "@/composables/usePassThrough";
import { footer } from "@/components/star/atom/Footer/footer-tv";

export function usePropsWatcher(props: any) {
  watch(
    () => props,
    (newProps, oldProps) => {
      // Handle prop changes here
      console.log("Props changed:", newProps, oldProps);
      console.log("text changed:", newProps.isMobile);
      console.log(
        "🚀 ~ file: test-read-props.ts:13 ~ usePropsWatcher ~ read(footer, newProps):",

        // @ts-ignore TS(2345) FIXME: Argument of type 'TVReturnType<{ isMobile: { true:... Remove this comment to see the full error message
        read(footer, newProps)()
      );
    },
    { deep: true }
  );
}
