import { isAscending } from "./../app/lib/utils/isAscending";

describe("Check function isAscending", () => {
  describe("test value input is not array", () => {
    test("input string should return false", () => {
      expect(isAscending("lalal")).toBe(false);
    });
    test("input obj should return false", () => {
      expect(isAscending({})).toBe(false);
    });
  });
  describe("test value input is not array increase", () => {
    test("input array have value undefined should return false", () => {
      expect(isAscending([3, 9, undefined, 10])).toBe(false);
    });
    test("input array number have value null should return false", () => {
      expect(isAscending([3, 9, null, 10])).toBe(false);
    });
    test("input array string & number should return false", () => {
      expect(isAscending(["a", 3, 9, 10])).toBe(false);
    });
    test("input array decrease have negative number should return false", () => {
      expect(isAscending([18, 26, -10, 33])).toBe(false);
    });
    test("input array decrease have decimal number should return false", () => {
      expect(isAscending([18, 0.5, 26, 33])).toBe(false);
    });
    test("input array decrease should return false", () => {
      expect(isAscending([10, 8, 6, 3])).toBe(false);
    });
  });
  describe("test value input array increase", () => {
    test("input array of elements with the same value should return true", () => {
      expect(isAscending([3, 3, 5])).toBe(true);
    });
    test("array with element value increase should return true", () => {
      expect(isAscending([1, 5, 9, 20])).toBe(true);
    });
    test("input array increase have negative number should return true", () => {
      expect(isAscending([-10, 18, 26, 33])).toBe(true);
    });
    test("input array increase have decimal number should return true", () => {
      expect(isAscending([0.5, 18, 26, 33])).toBe(true);
    });
  });
});
