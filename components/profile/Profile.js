import { Box, Button, Flex, List, ListItem, Text } from '@chakra-ui/react'
import { useUserBankInfo, useUserInformation, useUserSummary } from '@features/hooks/auth'
import React, { useEffect, useState } from 'react'
import CardList from './CardList'
import GeneralInfo from './GeneralInfo'

const Profile = () => {

    const [user, setUser] = useState([])
    const { data: dataUserSummery } = useUserSummary()

    const [generalInfo, setGeneralInfo] = useState(false)
    const [cards, setCards] = useState(false)

    const { data: dataUserInfo } = useUserInformation()
    const { data: userBankInfo } = useUserBankInfo()

    useEffect(() => {

    }, [])

    return (

        <Box as='section'>
            <Text as="h2" pb="50px" color="blue.500" fontWeight="bold" fontSize="1.5rem">پروفایل</Text>
            <Box minH="200px" w="80%" py="30px" px="30px" bg="main">

                <List display="flex" flexWrap="wrap" h="100%"  >
                    <ListItem display="flex" w="30%" mb="40px" >
                        <Text>نام:</Text>
                        <Text pr="20px" >{dataUserSummery?.Data?.FirstName}</Text>
                    </ListItem>

                    <ListItem display="flex" w="30%">
                        <Text>نام خانوادگی:</Text>
                        <Text pr="20px" >{dataUserSummery?.Data?.LastName}</Text>
                    </ListItem>
                    <ListItem display="flex" w="30%">
                        <Text>ایمیل :</Text>
                        <Text pr="20px" >{dataUserSummery?.Data?.Email}</Text>
                    </ListItem>
                    <ListItem display="flex" w="30%">
                        <Text>موبایل :</Text>
                        <Text pr="20px" >{dataUserSummery?.Data?.Mobile}</Text>
                    </ListItem>
                </List>
            </Box>

            <Box py="0px">
                <Button bg={generalInfo ? "main" : "blue.500"} color={generalInfo ? "black" : "white"} my="40px" ml="20px"
                    _hover={{ bg: "main", color: "black" }}
                    onClick={() => {
                        setGeneralInfo(!generalInfo);

                    }}
                >اطلاعات کلی</Button>
                {generalInfo ? (
                    <Box minH="200px" w="80%" py="30px" px="30px" bg="main">
                        <GeneralInfo user={user} data={dataUserInfo} />
                    </Box>
                ) : (null)}

                <Button bg={cards ? "main" : "blue.500"} color={cards ? "black" : "white"} my="40px"
                    _hover={{ bg: "main", color: "black" }}
                    onClick={() => setCards(!cards)}
                > لیست کارت ها</Button>
                {cards ? (
                    <CardList user={user} data={userBankInfo} />
                ) : (null)}

            </Box>
        </Box>
    )
}

export default Profile