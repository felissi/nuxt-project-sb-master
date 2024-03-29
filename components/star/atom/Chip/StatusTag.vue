<template>
  <StarChip v-bind="props" :label="label" :color="color" variant="flat" />
</template>
<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { computedWithReactive } from "@/composables";
import { computedWithControl } from "@vueuse/core";
import type { StarChipProps } from "./Chip.vue";
import StarChip from "./Chip.vue";

const { t, locale } = useI18n();

export type StatusTagProps = Omit<StarChipProps, "label"> & {
  status:
    | "pending"
    | "ready"
    | "notAttempted"
    | "attempted"
    | "upcoming"
    | "inProgress"
    | "finished"
    | "not_attempted"
    | "not_submitted"
    | "submitted";
  /** Use global locale if no locale specified */
  locale?: "zh" | "en";
  label?: string;
};
const props = withDefaults(defineProps<StatusTagProps>(), {
  size: "xs",
});
const label = computedWithReactive([props, locale], () => {
  const localeFallback = props.locale ?? locale.value;
  return t(`paper.status.${props.status}`, null, { locale: localeFallback });
});
const colorMap: Record<StatusTagProps["status"], StarChipProps["color"]> = {
  pending: "danger",
  ready: "success",
  notAttempted: "info",
  attempted: "secondary",
  upcoming: "info",
  inProgress: "secondary",
  finished: "default",
  not_attempted: "info",
  not_submitted: "danger",
  submitted: "success",
};
const color = computedWithReactive(props, () => colorMap[props.status]);
</script>
