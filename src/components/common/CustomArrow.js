import React from 'react';
import { SlArrowLeftCircle } from "react-icons/sl";


export const PrevArrow = ({ onClick, posX, posY="top-1/2" }) => (
    <button
        className={`absolute ${posX} ${posY} transform -translate-y-1/2 z-10 text-gray-500  rounded-full p-2 hover:text-black transition-colors duration-300`}
        onClick={onClick}
    >
        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
    </button>
);

export const NextArrow = ({ onClick, posX, posY="top-1/2" }) => (
    <button
        className={`absolute ${posX} ${posY} transform -translate-y-1/2 z-10 text-gray-500  rounded-full p-2 hover:text-black transition-colors duration-300`}
        onClick={onClick}
    >
        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
    </button>
);