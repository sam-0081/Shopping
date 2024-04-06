import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import {useGetProductsByCategoryQuery} from "../../features/api/api";
import Sidebar from "../sidebar/Sidebar";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import BannerCategory from "../sidebar/BannerCategory";

const CategoryProducts = () => {

    const {id} = useParams();
    const {data, isLoading, isFetching, isSuccess} = useGetProductsByCategoryQuery(id);
    const [priceFilter, setPriceFilter] = useState({min: 0, max: 50000});

    const handleFilterChange = (filter) => {
        setPriceFilter(filter);
    }

    const filteredData = data?.filter((item) => {
        // console.log(priceFilter.min, priceFilter.max);
        return item.price >=priceFilter.min && item.price <= priceFilter.max;
    })

    return (
        <div className={'container mx-auto px-4 flex-row gap-4 '}>
            <Breadcrumb/>

            <div className={'flex gap-4'}>
                <div className={'flex-col'}>
                    <BannerCategory/>
                    <Sidebar handleFilterChange={handleFilterChange} />
                </div>


                <div className={'flex flex-wrap justify-between gap-4'}>

                    {isLoading && <p>Loading...</p>}
                    {isFetching && <p>Fetching...</p>}
                    {isSuccess && filteredData.map(({id, images, title, price}) => (
                        <div key={id} className={"flex flex-grow"}>
                            <div
                                className="flex-col  mb-4 w-[200px] flex-grow  h-[450px] bg-gray-300 rounded-xl overflow-hidden">
                                <img src={images[0]} alt="product" className="w-full h-72 object-cover"/>
                                <div className="p-2 ">
                                    <h3 className="text-lg font-bold">{title}</h3>
                                    <p className="text-gray-500 z-20">{`Цена ${price}$`}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default CategoryProducts
;