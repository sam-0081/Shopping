import React from 'react';
import {IoMdClose} from "react-icons/io";
import {Link} from "react-router-dom";
import {ROUTES as ROUTS} from "../../utils/routes";
import FilterAccordion from "../filters/FilterAccordion";

const Sidebar = ({handleFilterChange}) => {
    return (
        <>
            <aside className={'flex-col w-[300px] h-[846px] border flex-shrink-0 rounded-2xl p-4'}>

                <FilterAccordion handleFilterChange={handleFilterChange}/>
            </aside>
        </>
    );
};

export default Sidebar;