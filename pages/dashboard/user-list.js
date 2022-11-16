import React, { useState } from 'react'
import { useRouter } from 'next/router'
import UserList from '@components/UserList'

const Dashboard = () => {
    const router = useRouter()
    const [isLogin, setIsLogin] = useState()
    return (
        <UserList />
    )
}
export default Dashboard