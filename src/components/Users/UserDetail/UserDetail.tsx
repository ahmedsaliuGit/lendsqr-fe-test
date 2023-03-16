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
        <>
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

          <div className={classes.sectionBody}>
            <div className={classes.sectionBodyRow}>
              <h3>Personal Information</h3>
              <div className={classes.sectionBodyCategory}>
                <div className={classes.sectionBodyCol}>
                  <p className={classes.sectionBodyLabel}>Full Name</p>
                  <p className={classes.sectionBodyItem}>
                    {user?.profile.firstName} {user?.profile.firstName}
                  </p>
                </div>
                <div className={classes.sectionBodyCol}>
                  <p className={classes.sectionBodyLabel}>Phone Number</p>
                  <p className={classes.sectionBodyItem}>
                    {user?.profile.phoneNumber}
                  </p>
                </div>
                <div className={classes.sectionBodyCol}>
                  <p className={classes.sectionBodyLabel}>Email Address</p>
                  <p className={classes.sectionBodyItem}>{user?.email}</p>
                </div>
                <div className={classes.sectionBodyCol}>
                  <p className={classes.sectionBodyLabel}>BVN</p>
                  <p className={classes.sectionBodyItem}>{user?.profile.bvn}</p>
                </div>
                <div className={classes.sectionBodyCol}>
                  <p className={classes.sectionBodyLabel}>Gender</p>
                  <p className={classes.sectionBodyItem}>
                    {user?.profile.gender}
                  </p>
                </div>
                <div className={classes.sectionBodyCol}>
                  <p className={classes.sectionBodyLabel}>Marital Status</p>
                  <p className={classes.sectionBodyItem}>Value</p>
                </div>
                <div className={classes.sectionBodyCol}>
                  <p className={classes.sectionBodyLabel}>Children</p>
                  <p className={classes.sectionBodyItem}>None</p>
                </div>
                <div className={classes.sectionBodyCol}>
                  <p className={classes.sectionBodyLabel}>Type of Apartment</p>
                  <p className={classes.sectionBodyItem}>Value</p>
                </div>
              </div>
            </div>

            <div className={classes.sectionBodyRow}>
              <h3>Education and Employemnt</h3>
              <div className={classes.sectionBodyCategory}>
                <div className={classes.sectionBodyCol}>
                  <p className={classes.sectionBodyLabel}>Level of Education</p>
                  <p className={classes.sectionBodyItem}>
                    {user?.education.level}
                  </p>
                </div>
                <div className={classes.sectionBodyCol}>
                  <p className={classes.sectionBodyLabel}>Employment Status</p>
                  <p className={classes.sectionBodyItem}>
                    {user?.education.employmentStatus}
                  </p>
                </div>
                <div className={classes.sectionBodyCol}>
                  <p className={classes.sectionBodyLabel}>
                    Sector of Employment
                  </p>
                  <p className={classes.sectionBodyItem}>
                    {user?.education.sector}
                  </p>
                </div>
                <div className={classes.sectionBodyCol}>
                  <p className={classes.sectionBodyLabel}>
                    Duration of Employment
                  </p>
                  <p className={classes.sectionBodyItem}>
                    {user?.education.duration}
                  </p>
                </div>
                <div className={classes.sectionBodyCol}>
                  <p className={classes.sectionBodyLabel}>Office Email</p>
                  <p className={classes.sectionBodyItem}>
                    {user?.education.officeEmail}
                  </p>
                </div>
                <div className={classes.sectionBodyCol}>
                  <p className={classes.sectionBodyLabel}>Monthly Income</p>
                  <p className={classes.sectionBodyItem}>
                    {user?.education.monthlyIncome.join("-")}
                  </p>
                </div>
                <div className={classes.sectionBodyCol}>
                  <p className={classes.sectionBodyLabel}>Loan Repayment</p>
                  <p className={classes.sectionBodyItem}>
                    {user?.education.loanRepayment}
                  </p>
                </div>
              </div>
            </div>

            <div className={classes.sectionBodyRow}>
              <h3>Socials</h3>
              <div className={classes.sectionBodyCategory}>
                <div className={classes.sectionBodyCol}>
                  <p className={classes.sectionBodyLabel}>Twitter</p>
                  <p className={classes.sectionBodyItem}>
                    {user?.socials.twitter}
                  </p>
                </div>
                <div className={classes.sectionBodyCol}>
                  <p className={classes.sectionBodyLabel}>Facebook</p>
                  <p className={classes.sectionBodyItem}>
                    {user?.socials.facebook}
                  </p>
                </div>
                <div className={classes.sectionBodyCol}>
                  <p className={classes.sectionBodyLabel}>instagram</p>
                  <p className={classes.sectionBodyItem}>
                    {user?.socials.instagram}
                  </p>
                </div>
              </div>
            </div>

            <div className={classes.sectionBodyRow}>
              <h3>Guarantor</h3>
              <div className={classes.sectionBodyCategory}>
                <div className={classes.sectionBodyCol}>
                  <p className={classes.sectionBodyLabel}>Full Name</p>
                  <p className={classes.sectionBodyItem}>
                    {user?.guarantor.firstName} {user?.guarantor.lastName}
                  </p>
                </div>
                <div className={classes.sectionBodyCol}>
                  <p className={classes.sectionBodyLabel}>Phone Number</p>
                  <p className={classes.sectionBodyItem}>
                    {user?.guarantor.phoneNumber}
                  </p>
                </div>
                <div className={classes.sectionBodyCol}>
                  <p className={classes.sectionBodyLabel}>Email Address</p>
                  <p className={classes.sectionBodyItem}>
                    {user?.guarantor.address}
                  </p>
                </div>
                <div className={classes.sectionBodyCol}>
                  <p className={classes.sectionBodyLabel}>Relationship</p>
                  <p className={classes.sectionBodyItem}>Sister</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
