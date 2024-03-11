import React, {useCallback, useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {getCategories} from "../../features/categories/CategoriesSlice";
import { RxHamburgerMenu } from "react-icons/rx";

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const categories = useSelector(({categories}) => categories.list);



    const toggleDropdown = () => {
        setIsOpen((prevIsOpen) => !prevIsOpen);
    }

    const handleClickOutside = useCallback((event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
            // console.log('click outside');
        }
    }, []);

    useEffect(() => {
        document.body.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.body.removeEventListener('mousedown', handleClickOutside);
            console.log('remove listener');
        };
    }, []);


    return (
        <div className={"relative"} ref={dropdownRef}>
            <div className="relative max-w-40 mr-4 cursor-pointer"
                 onClick={toggleDropdown}
                 onBlur={() => setIsOpen(false)}
            >
                <div className="flex  items-center justify-center shadow h-10 rounded-2xl text-black pl-12 px-4">
                    Каталог
                </div>
                <span className="absolute inset-y-0 left-0 flex items-center px-4">
                    <RxHamburgerMenu className={'size-5'}/>
                </span>
            </div>
            {isOpen && (
                <ul className={"absolute    w-full min-w-64 bg-gray-100  rounded-md shadow-2xl z-20 p-2"}>
                    {categories.map(({name, id, image}) => (
                        <li key={id} className={' font-bold p-2 size-9 border-b w-full hover:bg-gray-100'}>
                            <Link to={`/categories/${id}`}>{name}</Link>
                        </li>
                    ))}
                </ul>
            )}

        </div>
    );
};

export default Menu;