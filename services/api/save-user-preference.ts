import { z } from "zod";
import { $http } from "../axios";

const defaultParams = z.object({
  token: z.string(),
});

export interface SaveUserPreferenceParams {}
export function saveUserPreferenceQuery() {
  return $http
    .post("/api.php?action=save_user_preference", {
      // @ts-ignore TS(18004) FIXME: No value exists in scope for the shorthand propert... Remove this comment to see the full error message
      token,
      para: {
        // @ts-ignore TS(2554) FIXME: Expected 1-3 arguments, but got 0.
        general: JSON.stringify(),
      },
    })
    .then((_) => _.data)
    .then((_) => (_.success ? Promise.resolve(_.result) : Promise.reject(_.error)));
}
