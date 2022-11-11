import { Flex, List, ListItem } from '@chakra-ui/react'
import { useUserBankInfo, useUserInformation, useUserSummary } from '@features/hooks/auth'
import React, { useEffect, useState } from 'react'

const CardList = ({ user }) => {

    const [userBankInfo, setUserBankInfo] = useState()
    const { data: dataBankInfo } = useUserBankInfo()

    useEffect(() => {
        const userBank = dataBankInfo?.filter((item) => item?.Username === user)
        setUserBankInfo(userBank)

    }, [dataBankInfo])
    return (
        <List minH="200px" w="80%" pb="0px" py="30px" px="0px" bg="main"
        >

            <Flex display="flex" justifyContent="space-between" w="100%" pt="10px" pb="40px" px="20px">
                <ListItem w="2%" textAlign="center">#</ListItem>
                <ListItem w="10%" textAlign="center">نام</ListItem>
                <ListItem w="20%" textAlign="center" > شماره کارت</ListItem>
                <ListItem w="30%" textAlign="center">شماره شبا</ListItem>
            </Flex>


            {userBankInfo?.map((card, index) => (
                <Flex justify="space-between" w="100%" key={index} py="20px" px="20px"
                    _odd={{ bg: "main" }} _even={{ bg: "white" }}>
                    <ListItem w="2%" textAlign="center">{index + 1}</ListItem>
                    <ListItem w="10%" textAlign="center">{card?.CardName}</ListItem>
                    <ListItem w="20%" textAlign="center">{card?.CardNumber}</ListItem>
                    <ListItem w="30%" textAlign="center">{card?.ShabaNumber}</ListItem>
                </Flex>
            ))}



        </List>
    )
}

export default CardList