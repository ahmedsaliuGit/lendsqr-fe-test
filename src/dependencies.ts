import { HttpAdapter } from "./adapters/HttpAdapter";
import { UserService } from "./services/User.service";

class DependencyContainer {
  private _dependency = {};

  add<T>(key: symbol, dependency: T) {
    Object.defineProperty(this._dependency, key, {
      value: dependency,
    });
  }

  get<T>(key: symbol): T {
    return Object.getOwnPropertyDescriptor(this._dependency, key)?.value;
  }
}

const httpAdapter = new HttpAdapter({
  baseUrl: "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1",
});
const userService = new UserService(httpAdapter);

const dependencies = {
  UserService: Symbol("UserService"),
};

const container = new DependencyContainer();
container.add(dependencies.UserService, userService);

export { dependencies, container };
