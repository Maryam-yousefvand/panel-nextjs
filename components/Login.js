import { Box, Button, Flex, Text } from '@chakra-ui/react'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import styles from '../styles/Login.module.css'
import * as Yup from 'yup'
import { useAllUserList, useLogin } from '@features/hooks/auth'


const LoginSchema = Yup.object().shape({
    username: Yup.string().trim().required("نام کاربری الزامی می باشد"),
    password: Yup.string().trim().required("رمز کاربری الزامی می باشد")
})




const Login = () => {

    // const { data, isError, isLoading } = useAllUserList()
    // console.log(data)

    const { mutate } = useLogin()

    return (
        <Box as='section'>
            <Flex justify="center" align="center" minH="100vh" >
                <Flex w="30%" h="100%" justify="center" py="40px" bg='white' rounded='25px'
                    boxShadow="50px 20px 1000px -10px black">


                    <Formik

                        initialValues={{
                            username: '',
                            password: ''
                        }}
                        validationSchema={LoginSchema}
                        onSubmit={async (values) => {
                            mutate({
                                username: values.username,
                                password: values.password
                            })

                        }}

                    >
                        <Form className={styles.form}>
                            <Flex direction="column" mb="20px" >
                                <Text as="p" w='100%' my="10px">نام کاربری</Text>
                                <Field id="username" name="username" placeholder="نام کاربری" className={styles.field} />
                                <ErrorMessage name="username"
                                    render={msg => <Text color="red" pt="5px">{msg}</Text>} />
                            </Flex>
                            <Flex direction="column" my="20px" >
                                <Text as="p" my="10px">رمز عبور</Text>
                                <Field id='password' name="password" placeholder="رمز عبور" className={styles.field} />
                                <ErrorMessage name="password"
                                    render={msg => <Text color="red" pt="5px">{msg}</Text>} />
                            </Flex>
                            <Button type="submit" my="30px" w="100%" shadow='dark-lg' bg="blue" color="white"
                                py="10px"

                            >ورود</Button>

                        </Form>

                    </Formik>
                </Flex>

            </Flex>

        </Box>
    )
}

export default Login



