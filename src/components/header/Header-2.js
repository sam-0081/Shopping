import React from 'react';
import Logo from '../../img/icons/logo.png';
import {Link} from "react-router-dom";
import {ROUTES} from "../../utils/routes";

const Header2 = () => {

    return (
        <>
            <div className="flex justify-between items-center py-4 gap-4">
                <div className="flex-shrink-0">
                    <Link to={ROUTES.HOME} className="text-2xl ">
                        <img src={Logo} alt="Logo"/>
                    </Link>
                </div>

                <form className="w-3/5">
                    <div className="relative">

                        <div className="relative">
                            <div
                                className="flex items-center bg-white border-2 rounded-2xl border-amber-500 focus-within:border-amber-400 focus-within:bg-amber-50 ">
                                <div className="pl-3 ">
                                    <svg className="h-5 w-5 fill-gray-400">
                                        <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#search`}/>
                                    </svg>
                                </div>
                                <input type="text"
                                       className="py-2 pl-2 w-full rounded-2xl border-amber-500 focus:outline-none focus:bg-amber-50"
                                       placeholder="Поиск..." autoFocus/>
                            </div>
                        </div>

                    </div>
                </form>

                <div className="relative block cursor-pointer">
                    <Link to={ROUTES.AUTHORIZATION} className="bg-orange-500 w-32 h-12 rounded-2xl text-white p-3 pr-8">Профиль
                    </Link>
                    <span className="absolute inset-y-0 right-0 flex items-center px-3 ">
                                    <svg className="h-6 w-6 fill-white">
                                        <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#user`}/>
                                    </svg>
                                </span>
                </div>

                <div className="relative block cursor-pointer ">
                    <button
                        className="border-2 border-amber-500 w-32 h-12 rounded-2xl text-gray-500 text-lg  font-bold p-2 pr-8 ">2600
                    </button>
                    <span className="absolute inset-y-7 right-0 flex items-center px-3">
                                    <svg className="h-6 w-6 stroke-amber-500">
                                        <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#product`}/>
                                    </svg>
                                </span>
                </div>

                <div className="relative block cursor-pointer">
                    <button className="bg-orange-500 w-12 h-12 rounded-2xl text-white p-3 pr-8">
                    </button>
                    <span className="absolute inset-y-0  flex items-center px-3">
                                    <svg className="h-6 w-6 fill-white">
                                        <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#bag`}/>
                                    </svg>
                                </span>
                </div>

            </div>
        </>
    );
}
export default Header2;