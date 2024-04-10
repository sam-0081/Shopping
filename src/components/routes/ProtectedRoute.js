import React from 'react';
import {selectIsAuthenticated} from "../../features/authSlice/authSlice";
import {Navigate} from "react-router-dom";
import {ROUTES} from "../../utils/routes";
import {useSelector} from "react-redux";

const ProtectedRoute = ({children}) => {

    const isAuthenticated = useSelector(selectIsAuthenticated);

    if (!isAuthenticated) {
        return <Navigate to={ROUTES.LOGIN} replace/>
    }

 return children;
};

export default ProtectedRoute;