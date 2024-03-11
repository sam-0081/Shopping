import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {NextArrow, PrevArrow} from "../common/CustomArrow";

const Carousel = () => {
    const settings = {
        // className: "max-w-[814px] h-[416px]  rounded-2xl overflow-hidden",
         className: "w-2/3 h-[416px]  rounded-2xl overflow-hidden",
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <PrevArrow posX={"left-[20px]"}/>,
        prevArrow: <NextArrow posX={"right-[20px]"}/>,
        appendDots: dots => (
            <div
                style={{
                    display:"flex",
                    justifyContent: "center",

                    bottom: "40px"
                }}
            >
                <ul > {dots} </ul>
            </div>
        ),

    };

    return (
        <div className="container mx-auto mt-4 px-4 flex gap-4">
            <Slider {...settings}>
                <div className="relative  h-[416px] bg-gray-600 ">
                    <h3>1</h3>
                    <div className="   items-center justify-center">
                    </div>
                </div>
                <div className="relative h-[416px] bg-gray-600 ">
                    <h3>1</h3>
                    <div className="absolute inset-0 flex items-center justify-center">
                    </div>
                </div>
                <div className="relative h-[416px] bg-gray-600 ">
                    <h3>1</h3>
                    <div className="absolute inset-0 flex items-center justify-center">
                    </div>
                </div>
                <div className="relative h-[416px] bg-gray-600">
                    <h3>1</h3>
                    <div className="absolute inset-0 flex items-center justify-center">
                    </div>
                </div>
            </Slider>

            <div className={'flex flex-col justify-between gap-4 w-1/3'}>
                <div className="flex  h-[200px] bg-gray-600 rounded-2xl overflow-hidden">
                    <img  className={"w-full h-full object-cover"}/>
                </div>
                <div className="flex  h-[200px] bg-gray-600 rounded-2xl overflow-hidden">
                    <img className={"w-full h-full object-cover"}/>
                </div>
            </div>
        </div>
    );
};

export default Carousel;