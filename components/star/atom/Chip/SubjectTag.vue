<template>
  <StarChip :label="$t(`paper.packageId.${packageId}`)" size="xs" />
</template>
<script setup lang="ts">
import { PackageId } from "@/services/models";
import StarChip from "./Chip.vue";
import type { StarChipProps } from "./Chip.vue";

export type StarSubjectTagProps = {
  packageId: PackageId;
};
const props = withDefaults(defineProps<StarSubjectTagProps>(), {});
</script>
