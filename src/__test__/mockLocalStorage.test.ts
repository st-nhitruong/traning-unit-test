import { AuthStorageService } from "../app/core/services/authStorage.service";

describe("check mock", () => {
  const authStorageService = new AuthStorageService();
  test("setToken function", () => {
    const setTokenMock = jest.spyOn(authStorageService, "setToken");
    expect(authStorageService.setToken("test 123")).toBeCalled();
    expect(setTokenMock).toHaveBeenCalledWith("abc");
  });
});
