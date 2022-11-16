import Profile from '@components/profile/Profile'
import Login from '@components/Login'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useLogin } from '@features/hooks/auth'

const MyProfile = () => {

    const router = useRouter()
    const [isLogin, setIsLogin] = useState()
    const { data } = useLogin()
    console.log(data);
    useEffect(() => {
        // setIsLogin(localStorage.getItem("user"))
        // axios.get("https://api.exgain.ir/wallet/api/v1/User/Summary", {
        //     headers: {
        //         Authorization: "09999999999:68968503-0425-440a-9e68-6d73ec949f2b"
        //     }
        // })
    }, [])
    return (
        <>
            <Profile />
        </>
    )
}

export default MyProfile