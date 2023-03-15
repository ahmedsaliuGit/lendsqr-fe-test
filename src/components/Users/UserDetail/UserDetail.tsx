import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { UserDetails } from "../../../models/User";
import { UserService } from "../../../services/User.service";

import classes from "./UserDetail.module.css";
import { BallTriangle } from "react-loader-spinner";

type UserDetailPropsType = {
  userService: UserService;
};

export const UserDetail = ({ userService }: UserDetailPropsType) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<UserDetails>();

  const { id } = useParams();
  const userId: number = id !== undefined ? +id : 0;

  const getUser = () => {
    setLoading(true);

    return userService
      .getUser(userId)
      .then((user) => {
        setUser(user);
        setLoading(false);
      })
      .catch((err) => {
        throw new Error(err.msg);
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <div className="main-header">
        <Link to=".." className={classes.backLink}>
          <i className="fa-solid fa-arrow-left-long"></i> Back to Users
        </Link>
        <div className={classes.subheader}>
          <p className="main-header__title">User Details</p>
          <div className={classes.subheader__right}>
            <button
              className={`${classes.actionUserBtn} ${classes.actionUserBtnDanger}`}
            >
              Blacklist User
            </button>
            <button
              className={`${classes.actionUserBtn} ${classes.actionUserBtnSuccess}`}
            >
              Activate User
            </button>
          </div>
        </div>
      </div>

      {loading === true ? (
        <div className="loader">
          <BallTriangle color="#00BFFF" width={100} height={100} />
        </div>
      ) : (
        <div className={classes.sectionHeader}>
          <div className={classes.sectionHeaderContent}>
            <div className={classes.headerContentUser}>
              <div className={classes.avatar}>
                <img src={user?.profile.avatar} alt="user detail avatar" />
              </div>
              <div className={classes.userdetail}>
                <h3>
                  {user?.profile.firstName} {user?.profile.lastName}
                </h3>
                <p>{user?.accountNumber}</p>
              </div>
            </div>
            <div className={classes.headerContentTier}>
              <p>User's Tier</p>
              <span>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </span>
            </div>
            <div className={classes.headerContentAmout}>
              <h3>&#8358; {user?.accountBalance}</h3>
              <p>{user?.accountNumber}</p>
            </div>
          </div>

          <div className={classes.headerTabs}>
            <ul className={classes.headerTabsList}>
              <li
                className={`${classes.headerTabsItem} ${classes.itemSelected}`}
              >
                General Details
              </li>
              <li className={classes.headerTabsItem}>Documents</li>
              <li className={classes.headerTabsItem}>Bank Details</li>
              <li className={classes.headerTabsItem}>Loans</li>
              <li className={classes.headerTabsItem}>Savings</li>
              <li className={classes.headerTabsItem}>App and Settings</li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};
