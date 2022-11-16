import { Box, Button, Flex, Text } from '@chakra-ui/react'
import { useLogOut, useSignOut, useUserSummary } from '@features/hooks/auth'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const Navbar = () => {

    const [user, setUser] = useState()
    const router = useRouter()
    const { data: logOut } = useLogOut()
    const { data: dataUserSummery } = useUserSummary()


    return (

        <Flex minH="100vh" w="12%" justify="start" direction="column" bg="main"
            align="center" pb="50px" >

            <Flex pb="40px" pt="40px" bg="white" w="95%" justify="center" >
                <Text px="5px" >{dataUserSummery?.Data?.FirstName}</Text>
                <Text px="5px">{dataUserSummery?.Data?.LastName}</Text>

            </Flex>
            <Flex direction="column" w="100%">
                <Flex h='70px' my="50px" justify='center' align="center" w="100%"
                    bg={router.pathname === "/dashboard" ? ("white") : ("")} >
                    <Link href="/dashboard"
                        style={{
                            width: "100%", display: "flex",
                            height: "100%", alignItems: "center", justifyContent: "center"
                        }}
                    >پروفایل</Link>
                </Flex>
                <Flex h='70px' justify='center' align="center" w="100%"
                    bg={router.pathname === "/dashboard/user-list" ? ("white") : ("")}
                >
                    <Link href="/dashboard/user-list"
                        style={{
                            width: "100%", display: "flex",
                            height: "100%", alignItems: "center", justifyContent: "center"
                        }}
                    >لیست کاربران</Link>
                </Flex>

            </Flex>
            <Button py="20px" px="30px" mt="100px" bg="red.500" color="white"
                _hover={{ color: "red.500", bg: 'white' }}
                onClick={() => logOut?.IsSuccess ? (router.push("/")) : (null)}
            >خروج</Button>

        </Flex>

    )
}

export default Navbar