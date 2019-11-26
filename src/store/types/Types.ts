export interface UserData {
  email?: string;
  password?: string;
  uid?: string;
  user?: {};
}

export interface Auth {
  user?: {};

  loggedIn?: boolean;
  data?: UserData[];
  // registered?: {};
  error?: string;
}
