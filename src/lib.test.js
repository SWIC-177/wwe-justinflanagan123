import { describe, expect, test } from "vitest";
import {
  getLastName,
  merge2ArraysIntoAnArrayOfObjects,
  removeCorrespondingItemsByTerm,
} from "./lib";

describe("getLastName", () => {
  test("returns the last name from a full name", () => {
    // Arrange
    const fullName = "John Doe";
    const expected = "Doe";

    // Act
    const result = getLastName(fullName);

    // Assert
    expect(result).toBe(expected);
  });

  test("returns the last name from a full name with extra spaces", () => {
    const fullName = "John    Doe";
    const expected = "Doe";

    const result = getLastName(fullName);

    expect(result).toBe(expected);
  });

  test("returns the last name from a full name with extra spaces at the beginning", () => {
    const fullName = "    John Doe";
    const expected = "Doe";

    const result = getLastName(fullName);

    expect(result).toBe(expected);
  });

  test("returns the last name from a multi-word full name", () => {
    const fullName = "John Michael Doe";
    const expected = "Doe";

    const result = getLastName(fullName);

    expect(result).toBe(expected);
  });

  test("returns the last name from a full name with special characters", () => {
    const fullName = "Dan & Phil";
    const expected = "Phil";

    const result = getLastName(fullName);

    expect(result).toBe(expected);
  });
});

test("merge2ArraysIntoAnArrayOfObjects", () => {
  const a1 = ["title1", "title2", "title3"];
  const a2 = ["champion1", "champion2", "champion3"];
  const key1 = "title";
  const key2 = "champion";

  const expected = [
    { title: "title1", champion: "champion1" },
    { title: "title2", champion: "champion2" },
    { title: "title3", champion: "champion3" },
  ];

  const result = merge2ArraysIntoAnArrayOfObjects({ a1, a2, key1, key2 });

  expect(result).toEqual(expected);
});

test("removeCorrespondingItemsByTerm", () => {
  // Arrange
  const terms1 = ["term1", "term2", "term3"];
  const terms2 = ["corresponding1", "corresponding2", "corresponding3"];
  const filterTerm = "term2";

  const expected = {
    terms1: ["term1", "term3"],
    terms2: ["corresponding1", "corresponding3"],
  };

  // Act
  const result = removeCorrespondingItemsByTerm({ terms1, terms2, filterTerm });

  // Assert - Check if the function correctly removes the corresponding items
  expect(result.terms1).toEqual(expected.terms1);
  expect(result.terms2).toEqual(expected.terms2);
});
