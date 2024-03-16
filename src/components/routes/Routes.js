import React from 'react';
import {Route, Routes} from "react-router-dom";
// import {ROUTES} from "../../utils/routes";
import Home from "../home/Home";
import {ROUTES} from "../../utils/routes";
import SingleCategory from "../products/SingleCategory";

const AppRoutes = () => {
    return (
        <Routes>
            <Route index element={<Home/>}></Route>
            <Route path={ROUTES.CATEGORY} element={<SingleCategory />} />

        </Routes>
    );
};

export default AppRoutes;