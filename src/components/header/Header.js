import React from 'react';
import Header1 from "./Header-1";
import Logo from "../../img/icons/logo.png";
import Header2 from "./Header-2";
import Header3 from "./Header-3";

const Header = () => {
    return (
        <div>
            <header>
                <div className="container mx-auto px-4">
                    <Header1/>
                    <Header2/>
                    <Header3/>

                </div>
            </header>

        </div>
    );
};

export default Header;