import React from 'react';
import {NextArrow, PrevArrow} from "../common/CustomArrow";
import Slider from "react-slick";

const Products = () => {
    const settings = {
        className: "",
        dots: true,
        infinite: false,
        centerMode: false,
        slidesToShow: 4,
        slidesToScroll: 3,
        variableWidth: false,
        nextArrow: <PrevArrow posX={"right-[50px]"} posY={"top-[-20px]"}/>,
        prevArrow: <NextArrow posX={"right-[0px]"} posY={"top-[-20px]"}/>,


    };
    return (
        <div className="container mx-auto mt-2 px-4">
            <div>
                <h1 className="text-3xl font-bold pb-4 ">Товары</h1>
            </div>
            <div className=" ">
                <Slider {...settings}>
                    <div className={"flex"}>
                        <div className=" mr-3 max-w-80 h-96 bg-gray-600 rounded-xl ">
                        </div>
                    </div>
                    <div className={"flex"}>
                        <div className=" mr-3 max-w-80 h-96 bg-gray-600 rounded-xl ">
                        </div>
                    </div>
                    <div className={"flex"}>
                        <div className=" mr-3 max-w-80 h-96 bg-gray-600 rounded-xl ">
                        </div>
                    </div>
                    <div className={"flex"}>
                        <div className=" mr-3 max-w-80 h-96 bg-gray-600 rounded-xl ">
                        </div>
                    </div>
                    <div className={"flex"}>
                        <div className=" mr-3 max-w-80 h-96 bg-gray-600 rounded-xl ">
                        </div>
                    </div>
                    <div className={"flex"}>
                        <div className=" mr-3 max-w-80 h-96 bg-gray-600 rounded-xl ">
                        </div>
                    </div>
                    <div className={"flex"}>
                        <div className=" mr-3 max-w-80 h-96 bg-gray-600 rounded-xl ">
                        </div>
                    </div>
                    <div className={"flex"}>
                        <div className=" mr-3 max-w-80 h-96 bg-gray-600 rounded-xl ">
                        </div>
                    </div>
                    <div className={"flex"}>
                        <div className=" mr-3 max-w-80 h-96 bg-gray-600 rounded-xl ">
                        </div>
                    </div>


                </Slider>
            </div>

        </div>
    );
};

export default Products;