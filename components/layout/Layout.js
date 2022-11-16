import React, { useEffect, useState } from 'react'
import Footer from '@components/layout/Footer'
import Navbar from '@components/layout/Navbar'
import { Box, Flex } from '@chakra-ui/react'

const Layout = ({ children }) => {

    return (

        <Flex wrap="wrap" >
            <Navbar />
            <Box w="88%" p="50px" pt="100px" >{children}</Box>
        </Flex>

    )
}

export default Layout