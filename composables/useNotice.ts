import { useNoticeQuery } from "@/services/api";
import { useI18n } from "vue-i18n";
import { computedWithControl } from "@vueuse/core";

export function useNotice() {
  const { locale } = useI18n();
  const { data: notice } = useNoticeQuery();

  // @ts-ignore TS(2769) FIXME: No overload matches this call.
  return computedWithControl([locale, notice], () => notice.value?.map((_) => ({ html: _[locale.value] })));
}
