import { showHUD, Clipboard, closeMainWindow } from "@raycast/api";

import { converter } from "@lib/converter";
import { getErrorMessage } from "@lib/getErrorMessage";

import { ERROR_TYPES, HUD_SUCCESS_MESSAGE } from "@constants";

type UserInput = {
  input: string;
};

export async function handleStyleToggle({ input }: UserInput) {
  try {
    const converted = converter(input);

    await Clipboard.copy(converted);
    await showHUD(HUD_SUCCESS_MESSAGE);
    await closeMainWindow();
  } catch (error) {
    await showHUD(error instanceof Error ? error.message : getErrorMessage(ERROR_TYPES.GENERIC));
  }
}
