import { dependencies } from "../../../dependencies";
import { withDependency } from "../../../hoc/withDependencies";
import { UserDetail } from "./UserDetail";

export default withDependency(UserDetail, {
  userService: dependencies.UserService,
});
