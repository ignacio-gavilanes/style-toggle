import { converter } from "@lib/converter";

import { HUD_ERROR_PREFIX, HUD_ERROR_MESSAGES } from "@constants";

describe("converter", () => {
  it("returns the input string unchanged", () => {
    expect(converter("hello")).toBe("hello");
  });
  it("throws error if input string is empty", () => {
    expect(() => converter("")).toThrow(`${HUD_ERROR_PREFIX} ${HUD_ERROR_MESSAGES.EMPTY_STRING}`);
  });
});
