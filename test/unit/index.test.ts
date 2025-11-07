/** @file - Example test file */

import { describe, expect, it } from "@jest/globals";
/* eslint-disable-next-line import-x/namespace -- just example purposes */
import * as EmptyModule from "../../src";

describe("index", () => {
  it("should be importable and represent an empty module", () => {
    expect.assertions(2);
    /** Assert that the imported module is an object (which it will be for any module). */
    expect(typeof EmptyModule).toBe("object");

    /** Assert that the imported module has no enumerable properties (as it exports nothing). */
    expect(Object.keys(EmptyModule)).toHaveLength(0);
  });
});
