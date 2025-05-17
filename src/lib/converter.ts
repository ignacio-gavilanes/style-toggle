import { getErrorMessage } from "@lib/getErrorMessage";

import { ERROR_TYPES } from "@constants";

export function converter(input: string) {
  if (input.length) {
    return input;
  }

  throw new Error(getErrorMessage(ERROR_TYPES.EMPTY_STRING));
}
