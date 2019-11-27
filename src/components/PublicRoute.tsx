import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { AppState } from "../store/index.d";

interface PublicProps {
  isAuthenticated?: {};
  component?: any;
  path?: string;
  exact?: boolean;
}

export const PublicRoute: React.StatelessComponent<PublicProps> = ({
  isAuthenticated,
  component: Component,
  ...props
}) => {
  return (
    <Route
      {...props}
      component={(props: boolean) =>
        isAuthenticated ? <Redirect to="/" /> : <Component {...props} />
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

export default connect(mapStateToProps)(PublicRoute);
