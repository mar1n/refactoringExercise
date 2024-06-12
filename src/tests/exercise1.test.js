import { describe, it, expect } from "vitest";
import { data } from "../exercise/sampleData";
import { processData } from "../exercise/exercise1";

describe("exercise1", () => {
  it("returns summary of all items greater than 10", () => {
    expect(processData(data, 10, "A")).toEqual({
      total: 55,
      count: 2,
      average: 27.5,
      sortedData: [
        { value: 25, category: "A" },
        { value: 30, category: "A" },
      ],
    });
  });
});
