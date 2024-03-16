import React from 'react';
import { IoIosArrowForward } from "react-icons/io";
import {Link, useParams} from "react-router-dom";
import {ROUTES} from "../../utils/routes";
import {useSelector} from "react-redux";
import {useGetCategoryQuery} from "../../features/api/api";

const Breadcrumb = () => {

    const {id} = useParams();
    const {data,isSuccess} = useGetCategoryQuery(id);
    // const categoryName = data ? data.name : null;

    const categoryName = isSuccess && data ? data.name : null;
    return (
        <>
            <nav className="flex py-4" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                    <li className="inline-flex items-center">
                        <Link to={ROUTES.HOME}
                                className="text-sm font-medium text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">Home</Link>

                    </li>
                    {/*<li>*/}
                    {/*    <div className="flex items-center">*/}
                    {/*        <IoIosArrowForward className=" w-4 h-4 stroke-2 text-gray-400" />*/}

                    {/*        <a href="#"*/}
                    {/*           className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Projects</a>*/}
                    {/*    </div>*/}
                    {/*</li>*/}
                    <li aria-current="page">
                        <div className="flex items-center">
                            <IoIosArrowForward className=" w-4 h-4 stroke-2 text-gray-400" />
                            <span
                                className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">{categoryName}</span>
                        </div>
                    </li>
                </ol>
            </nav>

        </>
    );
};

export default Breadcrumb;