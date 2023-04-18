import { AuthenService } from "./../app/core/services/authen.service";
import { AuthStorageService } from "./../app/core/services/authStorage.service";
const auth = new AuthenService();
describe("Check signOut ", () => {
  const removeTokenMock = jest.spyOn(
    AuthStorageService.prototype,
    "removeToken"
  );
  auth.signOut();
  test("Check removeToken called", () => {
    expect(removeTokenMock).toHaveBeenCalled();
  });
});
