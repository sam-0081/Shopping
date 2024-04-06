import React, {useEffect, useState} from 'react';
import {useProfileQuery} from "../features/api/api";
import {skipToken} from "@reduxjs/toolkit/query";
import {useSelector} from "react-redux";

const useGetProfile = () => {
    const [accessTok, setAccessTok] = useState(null)
    const {user, accessToken} = useSelector((state) => state.auth);
    const {data, isLoading: isProfileLoading, refetch} = useProfileQuery(accessToken ?? skipToken);


    useEffect(() => {
        if (!accessTok) {
            setAccessTok(accessToken)
        }
    },[!data]);

    return {user, isProfileLoading, refetch};
};

export default useGetProfile;