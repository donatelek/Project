import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { AppState } from "../store/index.d";

interface PrivateProps {
  isAuthenticated?: {};
  component?: any;
  path?: any;
}

export const PrivateRoute: React.StatelessComponent<PrivateProps> = ({
  isAuthenticated,
  component: Component,
  ...props
}) => {
  return (
    <Route
      {...props}
      component={(props: boolean) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

const mapStateToProps = (state: AppState) => {
  console.log(state);
  return {
    isAuthenticated: state.authReducer
  };
};

export default connect(mapStateToProps)(PrivateRoute);
