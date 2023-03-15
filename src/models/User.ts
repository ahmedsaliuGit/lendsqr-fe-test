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
  profile: { avatar: string; firstName: string; lastName: string };
  accountBalance: string;
  accountNumber: string;
} & User;
