import React from 'react';

import LanguageSelector from "./LanguageSelector";

const Header1 = () => {

    return (
        <div className="flex justify-between">
            <div className="flex align-bottom items-center gap-4">
                <div className="flex gap-4 pt-2">
                    <div
                        className="flex justify-center border-2 border-amber-500 w-24 h-9 rounded-2xl text-amber-500 text-lg  font-bold  ">
                        <a href="">Акции</a>
                    </div>
                    <div
                        className="flex justify-center border-2 border-emerald-500  w-24 h-9 rounded-2xl text-emerald-500 text-lg  font-bold  ">
                        <a href="">Сеты</a>
                    </div>
                </div>

                <ul className="flex items-center gap-4">
                    <li>
                        <a href="#">Новости</a>
                    </li>
                    <li>
                        <a href="#">Доставка</a>
                    </li>
                    <li>
                        <a href="#">Условия</a>
                    </li>
                </ul>

            </div>
            <LanguageSelector/>
        </div>

    );
};

export default Header1;