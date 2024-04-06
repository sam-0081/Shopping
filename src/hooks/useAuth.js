// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { setCredentials, logOut } from '../features/authSlice/authSlice';
// import axios from "axios";
// import {BASE_URL} from "../utils/constance";
//
// const useAuth = () => {
//     const dispatch = useDispatch();
//     const token = useSelector((state) => state.auth.token);
//
//     useEffect(() => {
//         // Проверяем наличие токена при монтировании компонента
//         const storedToken = localStorage.getItem('accessToken');
//         if (storedToken) {
//             dispatch(setCredentials({ accessToken: storedToken }));
//         }
//     }, [dispatch]);
//
//     const handleLogin = async (email, password) => {
//         try {
//             const response = await axios.post(BASE_URL+'/auth/login', { email, password });
//             // console.log(response.data.access_token)
//             const { access_token, user } = response.data;
//             dispatch(setCredentials({ access_token, user }));
//             localStorage.setItem('accessToken', access_token);
//         } catch (error) {
//             // Обработка ошибки входа
//         }
//     };
//
//     const handleLogout = () => {
//         dispatch(logOut());
//         localStorage.removeItem('accessToken');
//     };
//
//     return { token, handleLogin, handleLogout };
// };
//
// export default useAuth;