import { dependencies } from "../../dependencies";
import { withDependency } from "../../hoc/withDependencies";
import { Users } from "./Users";

export default withDependency(Users, {
  userService: dependencies.UserService,
});
