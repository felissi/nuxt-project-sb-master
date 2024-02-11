<template>
  <StarButton
    v-tooltip.bottom="$t('ui.action')"
    icon="material-symbols:more-horiz"
    size="sm"
    variant="light"
    radius="full"
    :isIconOnly="true"
    class="text-text-300"
  />
</template>
<script setup lang="ts">
import { StarButton } from "@/components/star/atom/Button";
</script>
