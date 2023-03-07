import { dependencies } from "../../dependencies";
import { withDependency } from "../../hoc/withDependencies";
import DashboardPage from "./DashboardPage";

export default withDependency(DashboardPage, {
  userService: dependencies.UserService,
});
