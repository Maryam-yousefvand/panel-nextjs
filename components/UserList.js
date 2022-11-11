import { background, Box, Button, Flex, List, ListItem, Text } from '@chakra-ui/react'
import Layout from '@components/layout/Layout'
import { useAllUser } from '@features/hooks/auth'
import { Field, Form, Formik } from 'formik'
import Dashboard from 'pages/dashboard/user-list'
import React, { useEffect, useState } from 'react'
import CardList from './profile/CardList'
import GeneralInfo from './profile/GeneralInfo'

const UserList = () => {

    const { data, isError, isLoading } = useAllUser()
    let filtered = []
    const [search, setSearch] = useState(data)
    const [username, setUsername] = useState()
    const [userCard, setUserCards] = useState()

    const [generalInfoShow, setGeneralInfoShow] = useState(false)
    const [cardsShow, setCardsShow] = useState(false)

    useEffect(() => {
        setGeneralInfoShow(generalInfoShow)
    }, [username, userCard, generalInfoShow, setGeneralInfoShow])


    return (
        <Box as='section'  >

            <Formik
                initialValues={{
                    search: ""
                }}
                onSubmit={async (values) => {

                    filtered = data.filter((user) => user?.Data?.FirstName === values.search)
                    console.log(filtered)
                    if (values.search === "") {
                        setSearch(data)
                    }
                    else if (filtered.length > 0) {
                        setSearch(filtered)
                    } else {
                        setSearch([])
                    }

                }}
            >
                <Form>
                    <Flex w="100%">
                        <Field type="text" name="search" id='search'
                            placeholder="جستجو"
                            style={{
                                outline: `none`, width: `70%`,
                                paddingRight: `10px`,
                                backgroundColor: `beige`, display: `block`, height: "50px"
                            }} />
                        <Button type='submit' mr="20px" bg="main" w="7rem" display="flex"
                            h="50px" color="black"
                            _hover={{ border: '2px solid beige' }}
                        >جستجو</Button>
                    </Flex>
                </Form>
            </Formik>

            <Box mt="50px" w="80%" boxShadow="0px 0px 1px gray" >
                <List display="flex" justifyContent="space-between" alignItems="center" w="100%" py="30px" px="20px">
                    <ListItem w="2%" textAlign="center">#</ListItem>
                    <ListItem w="15%" textAlign="center">نام</ListItem>
                    <ListItem w="20%" textAlign="center" >نام خانوادگی</ListItem>
                    <ListItem w="35%" textAlign="center">ایمیل</ListItem>
                    <ListItem w="28%" textAlign="center">اطلاعات</ListItem>
                </List>

                <List display="flex" flexDirection="column" justifyContent="space-between"
                    w="100%"  >



                    {search?.length === 0 ? (null) : (search?.length > 0 ? (search?.map((user, index) => (

                        <Flex justify="space-between" alignItems="center" w="100%" key={index} py="30px"
                            _odd={{ bg: "main" }} _even={{ bg: "white" }} px="20px" >
                            <ListItem w="2%" textAlign="center">{user?.Data.Id}</ListItem>
                            <ListItem w="15%" textAlign="center">{user?.Data.FirstName}</ListItem>
                            <ListItem w="20%" textAlign="center">{user?.Data.LastName}</ListItem>
                            <ListItem w="35%" textAlign="center">{user?.Data.Email}</ListItem>
                            <ListItem w="28%" textAlign="center">
                                <Button bg="green.300" color="white" mx="10px"
                                    _hover={{ color: 'gray.600', border: "1px solid green" }}
                                    onClick={() => {
                                        setGeneralInfoShow(!generalInfoShow)
                                        setUsername(user?.Data?.Email);

                                    }

                                    }
                                >جزییات</Button>
                                <Button bg="blue.300" color="white" mx="10px"
                                    _hover={{ color: 'gray.600', border: "1px solid blue" }}
                                    onClick={() => {
                                        setCardsShow(!cardsShow)
                                        setCardsShow(user?.Data?.Email);
                                    }}
                                >لیست کارت ها</Button>
                            </ListItem>
                        </Flex>


                    ))) : (
                        data?.map((user) => (
                            <Flex justify="space-between" w="100%" alignItems="center" key={user.Data.Id} py="30px"
                                _odd={{ bg: "main" }} _even={{ bg: "white" }} px="20px" >
                                <ListItem w="2%" textAlign="center">{user?.Data.Id}</ListItem>
                                <ListItem w="15%" textAlign="center">{user?.Data.FirstName}</ListItem>
                                <ListItem w="20%" textAlign="center">{user?.Data.LastName}</ListItem>
                                <ListItem w="35%" textAlign="center">{user?.Data.Email}</ListItem>
                                <ListItem w="28%" textAlign="center">
                                    <Button bg="green.300" color="white" mx="10px"
                                        _hover={{ color: 'gray.600', border: "1px solid green" }}
                                        onClick={() => {
                                            setGeneralInfoShow(!generalInfoShow)
                                            setUsername(user?.Data?.Email);

                                        }

                                        }
                                    >جزییات</Button>
                                    <Button bg="blue.300" color="white" mx="10px"
                                        _hover={{ color: 'gray.600', border: "1px solid blue" }}
                                        onClick={() => {
                                            setCardsShow(!cardsShow)
                                            setCardsShow(user?.Data?.Email);
                                        }}
                                    >لیست کارت ها</Button>
                                </ListItem>
                            </Flex>
                        ))
                    ))}


                </List>

            </Box>

            {generalInfoShow ? (
                <Flex position="absolute" top="0" left="0" width="100vw"
                    h="100vh" justify="center" align="center" bg="light"  >
                    <Flex w="50%" justify="center" align="center" bg="main" color="gray.700"
                        minH="400px" py='50px' px="40px" boxShadow="lg" position='relative'>
                        {generalInfoShow ? (<GeneralInfo user={username} />) : (null)}

                        <Button position="absolute" top="0" left="0" bg="white" rounded="none"
                            _hover={{ bg: "white" }} border="1px solid beige "
                            onClick={() => setGeneralInfoShow(!generalInfoShow)}

                        >بستن</Button>
                    </Flex>
                </Flex>
            ) : (null)}


            {cardsShow ? (
                <Flex position="absolute" top="0" left="0" width="100vw"
                    h="100vh" justify="center" align="center" bg="light"  >
                    <Flex w="50%" justify="center" align="center" bg="main" color="gray.700"
                        minH="400px" py='10px' px="0px" boxShadow="lg" position='relative'>
                        <CardList user={cardsShow} />
                        <Button position="absolute" top="0" left="0" bg="white" rounded="none"
                            _hover={{ bg: "white" }} border="1px solid beige "
                            onClick={() => setCardsShow(!cardsShow)}

                        >بستن</Button>
                    </Flex>
                </Flex>
            ) : (null)}



        </Box >
    )
}

export default UserList