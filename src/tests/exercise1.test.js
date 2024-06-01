import { describe, it, expect } from "vitest";
import { data } from "../exercise/sampleData";
import { processData } from "../exercise/exercise1";

describe("exercise1", () => {
  it("returns summary of all items greater than 10", () => {
    expect(processData(data)).toEqual({
      total: 70,
      count: 3,
      average: 23.333333333333332,
      sortedData: [{ value: 15 }, { value: 25 }, { value: 30 }],
    });
  });
});
