import { Box, Button, Flex, Text } from '@chakra-ui/react'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import styles from '../styles/Login.module.css'
import * as Yup from 'yup'
import { useAllUser, useLogin } from '@features/hooks/auth'
import { useRouter } from 'next/router'


// const LoginSchema = Yup.object().shape({
//     username: Yup.string().trim().email('آدرس ایمیل معتبر نیست').required("نام کاربری الزامی می باشد"),
//     password: Yup.string().trim().required("رمز کاربری الزامی می باشد")
// })


const Login = () => {
    // const { data } = useAllUser()
    const [notUser, setNotUser] = useState()
    const [notPassword, setNotPassword] = useState()
    const [user, setUser] = useState()

    const router = useRouter()

    const { mutate, isLoading, isError } = useLogin()

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("user")))

    }, [])

    return (

        <Box as='section' bg="main" >
            <Flex justify="center" align="center" minH="100vh" >
                <Flex w="30%" h="100%" justify="center" py="40px" bg='white' rounded='25px'
                    boxShadow="0px 0px 2000px  black">
                    <Formik

                        initialValues={{
                            username: '',
                            password: '',
                            isLogin: true

                        }}
                        // validationSchema={LoginSchema}

                        onSubmit={async (values) => {
                            // mutate()
                            router.push("/dashboard")
                        }}

                    >

                        <Form className={styles.form}>
                            <Flex direction="column" mb="30px" >
                                <Text as="p" w='100%' my="10px">نام کاربری</Text>
                                <Field id="username" name="username" placeholder="نام کاربری" className={styles.field} />
                                <ErrorMessage name="username"
                                    render={msg => <Text color="red" pt="5px">{msg}</Text>} />

                                <Text color="red" pt="5px">{notUser}</Text>
                            </Flex>
                            <Flex direction="column" my="30px" >
                                <Text as="p" my="10px">رمز عبور</Text>
                                <Field id='password' name="password" placeholder="رمز عبور" className={styles.field} />
                                <ErrorMessage name="password"
                                    render={msg => <Text color="red" pt="5px">{msg}</Text>} />
                                <Text color="red" pt="5px"> {notPassword}</Text>

                            </Flex>
                            <Button type="submit" my="40px" w="100%" bg="gray" color="white"
                                py="30px" fontSize="1.2rem" _hover={{ bg: "main", color: "gray.600" }}

                            >ورود</Button>

                        </Form>

                    </Formik>
                </Flex>

            </Flex>

        </Box>



    )
}

export default Login



