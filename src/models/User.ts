export type User = {
  id: number;
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  createdAt: Date;
  lastActiveDate: Date;
};

export type UserDetails = {
  profile: {
    avatar: string;
    firstName: string;
    lastName: string;
    gender: string;
    bvn: string;
    phoneNumber: string;
  };
  accountBalance: string;
  accountNumber: string;
  education: {
    employmentStatus: string;
    level: string;
    sector: string;
    duration: string;
    officeEmail: string;
    loanRepayment: string;
    monthlyIncome: [];
  };
  socials: {
    facebook: string;
    twitter: string;
    instagram: string;
  };
  guarantor: {
    firstName: string;
    lastName: string;
    gender: string;
    phoneNumber: string;
    address: string;
  };
} & User;
