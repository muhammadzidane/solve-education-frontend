import { capitalizeFirstLetter } from "@/helpers";

describe("capitalizeFirstLetter", () => {
  it("should capitalize the first letter of a lowercase string", () => {
    expect(capitalizeFirstLetter("hello")).toBe("Hello");
  });

  it("should capitalize the first letter of an uppercase string", () => {
    expect(capitalizeFirstLetter("Hello")).toBe("Hello");
  });

  it("should handle an empty string", () => {
    expect(capitalizeFirstLetter("")).toBe("");
  });

  it("should capitalize the first letter of a string with multiple words", () => {
    expect(capitalizeFirstLetter("hello world")).toBe("Hello world");
  });

  it("should handle a string with only one character", () => {
    expect(capitalizeFirstLetter("h")).toBe("H");
  });

  it("should handle a string that starts with a space", () => {
    expect(capitalizeFirstLetter(" hello")).toBe(" hello");
  });
});
