import React from 'react';
import {IoMdClose} from "react-icons/io";
import {Link} from "react-router-dom";
import {ROUTES as ROUTS} from "../../utils/routes";
import Accordion from "./Accordion";

const Sidebar = () => {
    return (
        <>

            <aside className={'flex-col w-[300px] h-[846px] border flex-shrink-0 rounded-2xl p-4'}>

                <Accordion/>
            </aside>
        </>
    );
};

export default Sidebar;