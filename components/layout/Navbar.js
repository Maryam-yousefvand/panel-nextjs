import { Box, Button, Flex, Text } from '@chakra-ui/react'
import { useSignOut } from '@features/hooks/auth'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const Navbar = () => {

    const [user, setUser] = useState()
    const router = useRouter()
    const { mutate } = useSignOut()

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("user")))
    }, [])

    return (

        <>
            {!user ? (null) : (
                <Flex minH="100vh" w="12%" justify="start" direction="column" bg="main"
                    align="center" px="0px" pb="50px" >

                    <Flex pb="40px" pt="40px" bg="white" w="95%" justify="center" >
                        <Text px="5px" >{user?.lname}</Text>
                        <Text px="5px">{user?.name}</Text>

                    </Flex>
                    <Flex direction="column" >
                        <Flex pb="30px" pt="50px">
                            <Link href="/dashboard" >پروفایل</Link>
                        </Flex>
                        <Flex py="30px">
                            <Link href="/dashboard/user-list" >لیست کاربران</Link>
                        </Flex>

                    </Flex>
                    <Button py="20px" px="30px" mt="100px" bg="red.500" color="white"
                        _hover={{ color: "red.500", bg: 'white' }}
                        onClick={() => mutate({
                            isLogOut: true


                        })}
                    >خروج</Button>

                </Flex >
            )}
        </>

    )
}

export default Navbar