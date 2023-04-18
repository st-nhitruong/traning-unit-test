import { AuthStorageService } from "./../app/core/services/authStorage.service";

const auth = new AuthStorageService();

describe("check local storage set item", () => {
  const setTokenMock = jest.spyOn(Storage.prototype, "setItem");
  auth.setToken("abc");
  test("Check setToken called", () => {
    expect(setTokenMock).toHaveBeenCalled();
  });
  test("Check setToken with arguments", () => {
    expect(setTokenMock).toHaveBeenCalledWith("token", "abc");
  });
});

describe("Check local storage get item", () => {
  const getTokenMock = jest.spyOn(Storage.prototype, "getItem");
  auth.getToken();
  test("Check getToken called", () => {
    expect(getTokenMock).toHaveBeenCalled();
  });
  test("Check getToken with arguments", () => {
    expect(getTokenMock).toHaveBeenCalledWith("token");
  });
});

describe("Check local storage remove item", () => {
  const removeTokenMock = jest.spyOn(Storage.prototype, "removeItem");
  auth.removeToken();
  test("Check removeToken called", () => {
    expect(removeTokenMock).toHaveBeenCalled();
  });
});
