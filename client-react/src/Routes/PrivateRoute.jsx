import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { isAuth } from '../helpers/auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isAuth() ? (
                <Component {...props} />
            ) : (
                <Navigate to='/login' state={{ from: props.location }} />
            )
        }></Route>
);

export default PrivateRoute;
