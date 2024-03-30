import React from 'react';
import {Link} from "react-router-dom";
import {ROUTES} from "../../utils/routes";
import {useForm} from "react-hook-form";
import ErrorMessage from "./ErrorMessage";
import {useLoginMutation} from "../../features/api/api";
import useAuth from "../../hooks/useAuth";

const UserLogin = () => {
    // const [login] = useLoginMutation();
    const {token,handleLogin,handleLogout} = useAuth();
    const {
        register,
        watch,
        handleSubmit,
        reset,
        formState: {errors},

    } = useForm({
        criteriaMode: "all", mode: "onChange"
    });

    const onClick = (data) => {
        console.log('data', data);
        handleLogin(data.email, data.password).then(r => console.log(r)).catch(e => console.log(e))
        // login(data)
        reset()
    }

    return (
        <div className={'container mx-auto px-4'}>
            <h1 className={'text-center my-4'}>Вход</h1>

            <div className={'flex justify-center'}>
                <div className={'lg:w-1/3 md:w-1/2  w-full'}>
                    <form action="" method={'post'} className={'flex flex-col '} onClick={handleSubmit(onClick)}>

                        <label className="block my-4">
                            <span className="block text-sm font-medium text-gray-700">Электронная почта</span>
                            <input type="email" {...register('email', {
                                required: "Электронная почта обязательна.",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: "Введите корректный адрес электронной почты"
                                }

                            })} placeholder={'Электронная почта'}
                                   className={`input-custom ${errors.email ? "input-invalid" : ""}`}
                            />
                            <ErrorMessage errors={errors} name={'email'}/>

                        </label>
                        <label className="block my-4">
                            <span className="block text-sm font-medium text-gray-700">Пароль</span>
                            <input type="password" {...register('password', {
                                required: "Пароль обязателен.",
                            })}
                                   placeholder={'Пароль'}
                                   className={`input-custom ${errors.password ? "input-invalid" : ""}`}

                            />
                            <ErrorMessage errors={errors} name={'password'}/>

                        </label>


                        <button type="submit"
                                className="flex justify-center  bg-emerald-500 hover:bg-emerald-600 my-4  p-2 rounded-2xl text-slate-700 text-lg">Войти
                        </button>
                        <div className={'flex justify-center '}>
                            <span className="block text-sm font-medium text-gray-700">Нет аккаунта?</span>
                            <Link to={ROUTES.AUTHORIZATION}
                                  className="block text-sm font-medium text-emerald-500 mx-4">Зарегистрироваться</Link>
                        </div>


                    </form>
                    <div>
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserLogin;