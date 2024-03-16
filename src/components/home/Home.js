import React from 'react';
import SingleImageCarousel from "../carousel/SingleImageCarousel";
import Products from "../carousel/ProductImageCarousel";

const Home = () => {
    return (
        <>
            <SingleImageCarousel/>
            <Products/>
        </>
    );
};

export default Home;