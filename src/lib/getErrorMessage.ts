import type { ErrorKey } from "@local-types/error";
import { HUD_ERROR_MESSAGES, HUD_ERROR_PREFIX } from "@constants";

export const getErrorMessage = (key: ErrorKey): string => {
  if (key === HUD_ERROR_MESSAGES.GENERIC) {
    return HUD_ERROR_MESSAGES[key];
  }

  return `${HUD_ERROR_PREFIX} ${HUD_ERROR_MESSAGES[key]}`;
};
