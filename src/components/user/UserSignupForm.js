import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import {ROUTES} from "../../utils/routes";
import {useCreateUserMutation} from "../../features/api/api";
import {useForm} from "react-hook-form";
import ErrorMessage from "./ErrorMessage";
import {useSelector} from "react-redux";
import authSlice, {selectIsAuthenticated} from "../../features/authSlice/authSlice";

const UserSignupForm = () => {
    const [createUser] = useCreateUserMutation();

    const {
        register,
        watch,
        handleSubmit,
        reset,
        formState: {errors},
        setError,
        clearErrors
    } = useForm({
        criteriaMode: "all", mode: "onChange"

    });


    const password = watch("password");
    const confirmPassword = watch("confirmPassword");

    useEffect(() => {
        if (password !== confirmPassword) {
            setError("confirmPassword", {
                type: "manual",
                message: "Пароли не совпадают"
            });
        } else {
            clearErrors("confirmPassword");
        }
    }, [password, confirmPassword, watch, setError, clearErrors]);


    const onSubmit = (data) => {
        const {confirmPassword, ...userData} = data;
        console.log('userData', userData);
        createUser(userData)
        reset()

    }

    return (
        <div className={'container mx-auto px-4'}>
            <h1 className={'text-center my-4'}>Регистрация</h1>
            <div className={'flex justify-center'}>
                <div className={'lg:w-1/3 md:w-1/2  w-full'}>
                    <form className={'flex flex-col '} onSubmit={handleSubmit(onSubmit)}>
                        <label className="block my-4 peer">
                            <span className="block text-sm font-medium text-gray-700">Имя пользователя</span>
                            <input type="name" {...register('name', {
                                required: "Имя обязательна.",
                                minLength: {
                                    value: 2,
                                    message: "Имя должно содержать минимум 2 символа"
                                }
                            })} placeholder={'Имя пользователя'}
                                   className={`input-custom ${errors.name ? "input-invalid" : ""}`}
                            />
                            <ErrorMessage errors={errors} name="name"
                            />
                        </label>
                        <label className="block my-4">
                            <span className="block text-sm font-medium text-gray-700">Электронная почта</span>
                            <input type="email" {...register('email', {
                                required: "Электронная почта обязательна",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: "Введите корректный адрес электронной почты"
                                }
                            })} placeholder={'Электронная почта'}
                                   className={`input-custom ${errors.email ? "input-invalid" : ""}`}
                            />
                            <ErrorMessage errors={errors} name="email"
                            />

                        </label>
                        <label className="block my-4">
                            <span className="block text-sm font-medium text-gray-700">Пароль</span>
                            <input type="password" {...register('password', {required: "Пароль обязателен"})}
                                   placeholder={'Пароль'}
                                   className={`input-custom ${errors.password ? "input-invalid" : ""}`}


                            />
                            <ErrorMessage errors={errors} name="password"
                            />
                        </label>
                        <label className="block my-4">
                            <span className="block text-sm font-medium text-gray-700">Повтарить пароль</span>
                            <input type="password" {...register('confirmPassword', {
                                required: "Подтверждение пароля обязательно",
                                validate: (value) => value === password || "Пароли не совпадают"
                            })}
                                   placeholder="Повтарить пароль"
                                   className={`input-custom ${errors.confirmPassword ? "input-invalid" : ""}`}

                            />
                            <ErrorMessage errors={errors} name="confirmPassword"
                            />
                        </label>

                        <label className="block my-4">
                            <span className="block text-sm font-medium text-gray-700">Аватар</span>
                            <input type="avatar" {...register('avatar', {
                                required: "Ссылка на аватар обязательна",
                                pattern: {
                                    value: /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w.-]*)*\/?$/,
                                    message: "Некорректная ссылка на аватар",
                                },
                            })}
                                   placeholder="Ссылка на аватар"
                                   className={`input-custom ${errors.avatar ? "input-invalid" : ""}`}
                            />
                            <ErrorMessage errors={errors} name="avatar"/>
                        </label>

                        <button type="submit"
                                className="flex justify-center  bg-emerald-500 hover:bg-emerald-600 my-4  p-2 rounded-2xl text-slate-700 text-lg">Зарегистрироваться
                        </button>
                        <div className={'flex justify-center '}>
                            <span className="block text-sm font-medium text-gray-700">Уже есть аккаунт?</span>
                            <Link to={ROUTES.LOGIN}
                                  className="block text-sm font-medium text-emerald-500 mx-4">Войти</Link>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
        ;
};



export default UserSignupForm;