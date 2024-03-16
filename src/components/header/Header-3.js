import React, {useEffect} from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {NextArrow, PrevArrow} from "../common/CustomArrow";
import {useDispatch, useSelector} from "react-redux";
import {getCategories} from "../../features/categories/categoriesSlice";
import {Link} from "react-router-dom";
import Menu from "./Menu";


// const categories = [
//
//
//     {
//         id: 2,
//         name: "Напитки",
//         img: "Бакалея.jpg"
//     },
//     {
//         id: 3,
//         name: "Замороженная продукция",
//         img: "burgers.jpg"
//     },
//     {
//         id: 4,
//         name: "Овощи и фрукты",
//         img: "desserts.jpg"
//     },
//     {
//         id: 5,
//         name: "Все для дома",
//         img: "drinks.jpg"
//     },
//     {
//         id: 6,
//         name: "Молочные продукты",
//         img: "drinks.jpg"
//     },
//     {
//         id: 7,
//         name: "Бакалея",
//         img: "drinks.jpg"
//     },
//     {
//         id: 8,
//         name: "Мясо и рыба",
//         img: "drinks.jpg"
//     },
//     {
//         id: 9,
//         name: "Замороженная продукция",
//         img: "drinks.jpg"
//     },
//     {
//         id: 10,
//         name: "Хлеб и выпечка",
//         img: "drinks.jpg"
//     },
//     {
//         id: 11,
//         name: "Кондитерские изделия",
//         img: "drinks.jpg"
//     },
//
// ]


const Header3 = () => {
    const categories = useSelector(({categories}) => categories.list);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);
    // console.log(cat)

    const settings = {
        className: "  ",
        dots: false,
        infinite: false,
        centerMode: false,
        slidesToShow: 2,
        slidesToScroll: 3,
        variableWidth: true,
        nextArrow: <PrevArrow posX={"left-[-30px]"}/>,
        prevArrow: <NextArrow posX={"right-[-35px]"}/>,


    };
    return (
        <div className="flex items-center">
            <div className="relative max-w-40 mr-4">
                <Menu/>

                {/*<a*/}
                {/*    className="flex  items-center justify-center shadow h-10 rounded-2xl text-black pl-12 px-4"*/}
                {/*    href=""*/}
                {/*>*/}
                {/*    Каталог*/}
                {/*</a>*/}
                {/*<div className="absolute inset-y-0 left-0 flex items-center px-4">*/}
                {/*    <svg className="h-5 w-5 fill-black">*/}
                {/*        <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#hamburger`}/>*/}
                {/*    </svg>*/}
                {/*</div>*/}
            </div>
            <div className="flex-grow w-6/12 pr-8 pl-2">
                <Slider {...settings}>
                    {categories.map(({id, name, image}) => (
                        <div key={id} className="relative flex-shrink-0">
                            <Link to={`/categories/${id}`} className="flex  items-center justify-center shadow h-10 rounded-2xl  text-black pl-12 px-4 mr-2 my-2">
                                {name}
                            </Link>

                            {/*<div className="absolute inset-y-0 left-0 flex items-center px-4">*/}
                            {/*    <svg className="h-5 w-5 fill-black">*/}
                            {/*        /!*<use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#${image}`}/>*!/*/}
                            {/*    </svg>*/}
                            {/*</div>*/}
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Header3;