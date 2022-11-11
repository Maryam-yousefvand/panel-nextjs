import React, { useEffect, useState } from 'react'
import Footer from '@components/layout/Footer'
import Navbar from '@components/layout/Navbar'
import { Box, Flex } from '@chakra-ui/react'

const Layout = ({ children }) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")))
    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("user")))
    }, [])

    return (
        <>
            {user ? (
                <Flex wrap="wrap" >
                    <Navbar />
                    <Box w="88%" p="50px" pt="100px" >{children}</Box>
                    {/* <Footer /> */}

                </Flex>
            ) : (null)}
        </>
    )
}

export default Layout