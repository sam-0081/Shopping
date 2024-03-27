import React from 'react';
import {Route, Routes} from "react-router-dom";
// import {ROUTES} from "../../utils/routes";
import Home from "../home/Home";
import {ROUTES} from "../../utils/routes";
import CategoryProducts from "../products/CategoryProducts";
import UserSignupForm from "../user/UserSignupForm";
import UserLogin from "../user/UserLogin";

const AppRoutes = () => {
    return (
        <Routes>
            <Route index element={<Home/>}></Route>
            <Route path={ROUTES.CATEGORY} element={<CategoryProducts />} />
            <Route path={ROUTES.AUTHORIZATION} element={<UserSignupForm />} />
            <Route path={ROUTES.LOGIN} element={<UserLogin />} />

        </Routes>
    );
};

export default AppRoutes;