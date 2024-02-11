// @ts-ignore TS(2395) FIXME: Individual declarations in merged declaration 'I18... Remove this comment to see the full error message
import { createI18n, type I18n, type I18nOptions } from "vue-i18n";
import { messages } from "./messages";

export type Locale = "en" | "zh";
export const options = {
  locale: "en",
  legacy: false,
  // globalInjection: true,
  messages,
  // @ts-ignore TS(7005) FIXME: Variable 'satisfies' implicitly has an 'any' type.
} as const satisfies I18nOptions;
/** Lift the i18n instance up,
 * to use it outside components and <setup>,
 * like in test and storybook
 */
export const i18n: I18n<
  typeof options.messages,
  {},
  {},
  keyof typeof options.messages,
  typeof options.legacy
> = createI18n(options);
