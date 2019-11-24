export interface Auth {
    uid: firebase.auth.UserCredential | string;
    loggedIn: boolean;
    data: [];
    registered: [];
    error: any;
}