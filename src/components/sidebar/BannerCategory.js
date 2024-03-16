import React from 'react';
import {Link} from "react-router-dom";
import {ROUTES as ROUTS} from "../../utils/routes";
import {IoMdClose} from "react-icons/io";

const BannerCategory = () => {
    return (
            <div className="bg-emerald-500 text-white text-left py-2 px-4 relative rounded-xl mb-4">
                Banner Content Here
                <span className="absolute right-2 text-xl">
                        <Link to={ROUTS.HOME}>
                        <IoMdClose/>
                        </Link>
                    </span>
            </div>
    );
};

export default BannerCategory;