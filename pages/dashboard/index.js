import Profile from '@components/profile/Profile'
import Login from '@components/Login'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const MyProfile = () => {

    const router = useRouter()
    const [isLogin, setIsLogin] = useState()
    useEffect(() => {
        setIsLogin(localStorage.getItem("user"))
    }, [])
    return (
        <>
            {isLogin ? (<Profile />) : (<Login />)}
        </>
    )
}

export default MyProfile