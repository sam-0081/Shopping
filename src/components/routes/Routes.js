import React from 'react';
import {Route, Routes} from "react-router-dom";
// import {ROUTES} from "../../utils/routes";
import Home from "../home/Home";
import {ROUTES} from "../../utils/routes";
import CategoryProducts from "../products/CategoryProducts";
import UserSignupForm from "../user/UserSignupForm";
import UserLogin from "../user/UserLogin";
import UserProfile from "../user/UserProfile";
import SingleProduct from "../products/SingleProduct";
import Cart from "../cart/Cart";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
    return (
        <Routes>
            <Route index element={<Home/>}></Route>
            <Route path={ROUTES.CATEGORY} element={<CategoryProducts/>}/>
            <Route path={ROUTES.AUTHORIZATION} element={<UserSignupForm/>}/>
            <Route path={ROUTES.LOGIN} element={<UserLogin/>}/>
            <Route path={ROUTES.PROFILE} element={<UserProfile/>}/>
            <Route path={ROUTES.PRODUCT} element={<SingleProduct/>}/>
            <Route path={ROUTES.CART} element={
                <ProtectedRoute>
                    <Cart/>
                </ProtectedRoute>
            }/>
        </Routes>
    );
};

export default AppRoutes;