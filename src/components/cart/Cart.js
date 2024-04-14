import React from 'react';
import Container from "../container/Container";
import {useDispatch, useSelector} from "react-redux";
import {MdDelete} from "react-icons/md";
import {addToCart, removeFromCart} from "../../features/authSlice/authSlice";
import {Link} from "react-router-dom";
import {API_ROUTES} from "../../utils/constance";

const Cart = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.auth.cart);


    const deleteItem = (item) => {
        dispatch(removeFromCart(item))
    }

    const changeQuantity = (item, quantity) => {
        dispatch(addToCart({...item, quantity}))

    }


    return (
        <Container>
            <div className={'flex-col gap-4 '}>

                <h2 className="text-3xl font-bold pb-4 ">Корзина</h2>
                <div className={'flex gap-4'}>

                    <div className={'flex-grow'}>

                        <div
                            className="flex-col justify-between items-center border border-gray-200  rounded-2xl gap-4">

                            {cart.length === 0 ? (
                                <p className="text-lg font-bold">Ваша корзина пуста</p>
                            ) : (
                                cart.map((item, index) => (
                                    <div key={item.id}
                                         className={`flex justify-between items-center ${(index === cart.length - 1) ? "" : "border-b"} p-2  border-gray-200 gap-4`}>
                                        <div className="w-1/5">
                                            <img src={item.images[0]} alt="product"
                                                 className="w-20 h-20 object-cover rounded"/>
                                        </div>
                                        <Link to={API_ROUTES.PRODUCT(item.id)} className={' w-1/2'}>

                                            <div className="">
                                                <h3 className="text-lg font-bold">{item.title}</h3>
                                            </div>
                                        </Link>
                                        <div className="w-1/4">
                                            <h3 className="text-lg font-bold">{item.price}$</h3>
                                        </div>

                                        <div className="flex items-center gap-4 w-1/4">
                                            <button
                                                className="relative w-8 h-8 border-2 border-red-500 rounded-full  text-2xl font-bold"
                                                onClick={() => changeQuantity(item, Math.min(9, item.quantity + 1))}>
                                                <span className="absolute -inset-1 m-auto text-red-500">+</span>
                                            </button>
                                            <h3 className="text-lg font-bold">{item.quantity}</h3>
                                            <button
                                                className="relative w-8 h-8 border-2 border-red-500 rounded-full  text-2xl font-bold"
                                                onClick={() => changeQuantity(item, Math.max(1, item.quantity - 1))}>
                                                <span className="absolute -inset-1 m-auto text-red-500">-</span>
                                            </button>
                                        </div>
                                        <div className="w-1/4">
                                            <h3 className="text-lg font-bold">{item.price * item.quantity}$</h3>
                                        </div>
                                        <div className="w-1/4">
                                            <button
                                                onClick={() => deleteItem(item)}
                                                className="text-lg font-bold">
                                                <MdDelete className={'fill-red-500'}/>
                                            </button>
                                        </div>

                                    </div>
                                ))


                            )}


                        </div>

                    </div>
                    <div className={'flex-col '}>
                        <div
                            className={`flex-col justify-between items-center border border-gray-200  rounded-2xl gap-4 p-4 mb-2`}>
                            <div className={'flex gap-2'}>
                                <form className={'flex'}>
                                    <label className="block my-4">Введите промокод:
                                        <div className={'flex gap-2'}><input className={'input-custom'}/>
                                            <button type={"button"}
                                                    className=" text-white bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700  py-2 px-4  rounded-xl  text-lg">
                                                Применить
                                            </button>
                                        </div>
                                    </label>
                                </form>
                            </div>
                        </div>
                        <div
                            className={'flex-col justify-between items-center border border-gray-200  rounded-2xl gap-4 p-4'}>
                            <div className={'flex justify-between w-full'}>
                                <h3 className="text-lg font-bold">Итоговая сумма:</h3>
                                <h3 className="text-lg font-bold">{cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}$</h3>
                            </div>
                        </div>
                        <button
                            className="w-full border-2 border-amber-500 px-4 py-2 my-2 hover:bg-amber-400 active:bg-amber-500 hover:text-white rounded-2xl text-amber-500 text-lg  font-bold">
                            Оформить заказ
                        </button>

                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Cart;