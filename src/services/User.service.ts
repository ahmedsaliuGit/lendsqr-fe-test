import { HttpAdapter } from "../adapters/HttpAdapter";
import { User, UserDetails } from "../models/User";

export class UserService {
  private readonly http: HttpAdapter;

  constructor(httpAdapter: HttpAdapter) {
    this.http = httpAdapter;
  }

  getAllUsers() {
    return this.http.get<User[]>("/users");
  }

  getUser(userId: number) {
    return this.http.get<UserDetails>("/users/" + userId);
  }
}
