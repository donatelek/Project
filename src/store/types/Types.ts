export interface UserData {
  email?: string;
  password?: string;
}

export interface Auth {
  error?: string;
  uid?: any;
  user?: {};
  loggedIn?: boolean;
}
