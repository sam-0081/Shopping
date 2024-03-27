import React from 'react';
import {Link} from "react-router-dom";
import {ROUTES} from "../../utils/routes";

const UserLogin = () => {
    return (
        <div className={'container mx-auto px-4'}>
            <h1 className={'text-center my-4'}>Вход</h1>

            <div className={'flex justify-center'}>
                <div className={'lg:w-1/3 md:w-1/2  w-full'}>
                    <form action="" method={'post'} className={'flex flex-col '}>

                        <label className="block my-4">
                            <span className="block text-sm font-medium text-gray-700">Электронная почта</span>
                            <input type="email" name={"email"} placeholder={'Электронная почта'}
                                   className="input-custom"
                            />
                        </label>
                        <label className="block my-4">
                            <span className="block text-sm font-medium text-gray-700">Пароль</span>
                            <input type="password" name={"password"} placeholder={'Пароль'}
                                   className="input-custom"
                            />
                        </label>


                        <button type="submit"
                                className="flex justify-center  bg-emerald-500 my-4  p-2 rounded-2xl text-slate-700 text-lg">Войти
                        </button>
                        <div className={'flex justify-center '}>
                            <span className="block text-sm font-medium text-gray-700">Нет аккаунта?</span>
                            <Link to={ROUTES.AUTHORIZATION}
                                  className="block text-sm font-medium text-emerald-500 mx-4">Зарегистрироваться</Link>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default UserLogin;