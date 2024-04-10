import React, {useEffect} from 'react';
import {NextArrow, PrevArrow} from "../common/CustomArrow";
import Slider from "react-slick";
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "../../features/products/productsSlice";
import {BASE_URL} from "../../utils/constance";

const Products = () => {

    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.list);

    useEffect(() => {
        dispatch(getProducts())

    }, [dispatch])

    const settings = {
        className: "",
        dots: false,
        infinite: false,
        centerMode: false,
        slidesToShow: 4,
        slidesToScroll: 3,
        variableWidth: false,
        nextArrow: <NextArrow posX={"right-[0px]"} posY={"top-[-20px]"}/>,
        prevArrow: <PrevArrow posX={"right-[50px]"} posY={"top-[-20px]"}/>,


    };
    return (
        <div className="container mx-auto mt-2 px-4">
            <div>
                <h1 className="text-3xl font-bold pb-4 ">Товары</h1>
            </div>
            <div className=" ">
                <Slider {...settings}>
                    {products &&
                        products.map(({id, images, price, title}) => (
                        <div key={id} className={"flex"}>
                            <div className=" mr-3 max-w-80 h-96 bg-gray-300 rounded-xl overflow-hidden">
                                <img src={images[0]} alt="product" className="w-full h-72 object-cover"/>
                                <div className="p-2">
                                    <h3 className="text-lg font-bold">{title}</h3>
                                    <p className="text-gray-500">{`Цена ${price}$`}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Products;