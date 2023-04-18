import { AuthStorageService } from "./authStorage.service";

export class AuthenService {
  authStorage: AuthStorageService;
  constructor() {
    this.authStorage = new AuthStorageService();
  }
  signOut() {
    this.authStorage.removeToken();
  }
}
