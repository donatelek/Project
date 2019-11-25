export interface UserData {
  email?: string;
  password?: string;
}

export interface Auth {
  user?: {};
  uid?: string;
  loggedIn?: boolean;
  data?: UserData[];
  // registered?: {};
  error?: string;
}
