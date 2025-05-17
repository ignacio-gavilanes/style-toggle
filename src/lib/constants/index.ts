import type { ErrorKey } from "@local-types/error";
import type { FormKey } from "@local-types/form";

export const HUD_SUCCESS_MESSAGE = "✅ Converted styles copied to clipboard!";
export const HUD_ERROR_PREFIX = "❌ Conversion failed:";

export const ERROR_TYPES = {
  EMPTY_STRING: "EMPTY_STRING",
  GENERIC: "GENERIC",
} as const;

export const HUD_ERROR_MESSAGES: Record<ErrorKey, string> = {
  EMPTY_STRING: "Cannot convert an empty string!",
  GENERIC: "❌ Unknown error",
};

export const FORM_ELEMENTS = {
  ACTION: "ACTION",
  DESCRIPTION: "DESCRIPTION",
  PLACEHOLDER: "PLACEHOLDER",
} as const;

export const FORM: Record<FormKey, string> = {
  ACTION: "Convert & Close",
  DESCRIPTION:
    "Convert CSS to JavaScript styles or vice versa.\nResult will be copied to your clipboard automatically.",
  PLACEHOLDER: "Paste your styles here...",
};
