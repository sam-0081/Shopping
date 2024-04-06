import React from 'react';
import useGetProfile from "../../hooks/useGetProfile";

const UserProfile = () => {
    // const {user} = useSelector(state => state.auth);
    const {user, isProfileLoading} = useGetProfile();

    // const {accessToken} = user;
    // const dispatch = useDispatch();
    // const {user} = useGetProfile(accessToken)

    // useEffect(() => {
    //     const accessToken = localStorage.getItem('accessToken');
    //     const refreshToken = localStorage.getItem('refreshToken');
    //
    //     console.log(accessToken, refreshToken)
    //     console.log(refreshToken, refreshToken)
    //
    //     if (accessToken && refreshToken) {
    //         // Восстановление данных аутентификации из localStorage
    //         dispatch(setCredentials({ accessToken, refreshToken }));
    //     }
    //     console.log(user)
    // }, [dispatch]);

    return (
        <div className={'container mx-auto px-4 flex-row gap-4 '}>

            <div className={'flex mx-auto justify-center bg-gray-400'}>
                <h1 >User Profile</h1>
            </div>

            {isProfileLoading ?
                <p className={'flex justify-center  p-8 font-bold text-3xl'}>Загрузка...</p> :
            user ?
                <div>
                    {Object.entries(user).map(([key, value]) => (
                        <p className={'pl-8 p-2 font-bold'} key={key}>
                            {key} : <span className={'font-normal'}>{value}</span>
                        </p>
                    ))}
                </div>
            : <p className={'flex justify-center  p-8 font-bold text-3xl'}>Пользователь не найден</p>}
        </div>
    );
};

export default UserProfile;