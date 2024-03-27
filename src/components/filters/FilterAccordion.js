import React, {useState} from 'react';
import {MdKeyboardArrowDown} from "react-icons/md";
import PriceFilter from "./PriceFilter";
import PromotionFilter from "./PromotionFilter";
import PropertyFilter from "./PropertyFilter";
import BrandFilter from "./BrandFilter";
import ManufacturerFilter from "./ManufacturerFilter";


const FilterAccordion = ({handleFilterChange}) => {


    const [show, setShow] = useState({collapse: false});
    // const [priceFilter, setPriceFilter] = useState({min: 0, max: 0});

    // const handleFilterChange = (filter) => {
    //     setPriceFilter(filter);
    // }

    const toggleShow = (value) => {
        setShow({...show, ...value});
    };

    return (

        <div>
            <div>
                <h2>
                    <button type="button"
                            className="flex items-center justify-between w-full py-2 font-medium  text-black "
                            onClick={() => toggleShow({collapse1: !show.collapse1})}>
                        <span>Цена</span>
                        <MdKeyboardArrowDown
                            className={`w-6 h-6 ${show.collapse1 ? 'rotate-180 ' : 'rotate-0'} ease-in duration-200`}/>
                    </button>
                </h2>
                <div className={`overflow-hidden transition-max-h duration-300 ease-in-out ${
                    show.collapse1 ? 'max-h-[500px]' : 'max-h-0'
                }`}>
                    <div className="text-gray-800  border-b-0 border-gray-200 ">
                        <PriceFilter onFilterChange={handleFilterChange}/>

                    </div>
                </div>
            </div>

            <div>
                <h2>
                    <button type="button"
                            className="flex items-center justify-between w-full py-2 font-medium  text-black "
                            onClick={() => toggleShow({collapse2: !show.collapse2})}>
                        <span>Акции</span>
                        <MdKeyboardArrowDown
                            className={`w-6 h-6 ${show.collapse2 ? 'rotate-180 ' : 'rotate-0'} ease-in duration-200`}/>
                    </button>
                </h2>
                <div className={`overflow-hidden transition-max-h duration-300 ease-in-out ${
                    show.collapse2 ? 'max-h-[500px]' : 'max-h-0'
                }`}>
                    <div className="text-gray-800  border-b-0 border-gray-200 ">
                        <PromotionFilter/>
                    </div>
                </div>
            </div>

            <div>
                <h2>
                    <button type="button"
                            className="flex items-center justify-between w-full py-2 font-medium  text-black "
                            onClick={() => toggleShow({collapse3: !show.collapse3})}>
                        <span>Свойства</span>
                        <MdKeyboardArrowDown
                            className={`w-6 h-6 ${show.collapse3 ? 'rotate-180 ' : 'rotate-0'} ease-in duration-200`}/>
                    </button>
                </h2>
                <div className={`overflow-hidden transition-max-h duration-300 ease-in-out ${
                    show.collapse3 ? 'max-h-[500px]' : 'max-h-0'
                }`}>
                    <div className="text-gray-800  border-b-0 border-gray-200 ">
                        <PropertyFilter/>
                    </div>
                </div>
            </div>

            <div>
                <h2>
                    <button type="button"
                            className="flex items-center justify-between w-full py-2 font-medium  text-black "
                            onClick={() => toggleShow({collapse4: !show.collapse4})}>
                        <span>Бренды</span>
                        <MdKeyboardArrowDown
                            className={`w-6 h-6 ${show.collapse4 ? 'rotate-180 ' : 'rotate-0'} ease-in duration-200`}/>
                    </button>
                </h2>
                <div className={`overflow-hidden transition-max-h duration-300 ease-in-out ${
                    show.collapse4 ? 'max-h-[500px]' : 'max-h-0'
                }`}>
                    <div className="text-gray-800  border-b-0 border-gray-200 ">
                        <BrandFilter/>
                    </div>
                </div>
            </div>

            <div>
                <h2>
                    <button type="button"
                            className="flex items-center justify-between w-full py-2 font-medium  text-black "
                            onClick={() => toggleShow({collapse5: !show.collapse5})}>
                        <span>Производители</span>
                        <MdKeyboardArrowDown
                            className={`w-6 h-6 ${show.collapse5 ? 'rotate-180 ' : 'rotate-0'} ease-in duration-200`}/>
                    </button>
                </h2>
                <div className={`overflow-hidden transition-max-h duration-300 ease-in-out ${
                    show.collapse5 ? 'max-h-[500px]' : 'max-h-0'
                }`}>
                    <div className="text-gray-800  border-b-0 border-gray-200 ">
                        <ManufacturerFilter/>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default FilterAccordion;