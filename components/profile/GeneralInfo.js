import { List, ListItem, Text } from '@chakra-ui/react'
import { useUserInformation } from '@features/hooks/auth'
import React, { useEffect, useState } from 'react'

const GeneralInfo = ({ user }) => {

    const [userInformation, setUserInformation] = useState()
    const { data: dataUserInfo } = useUserInformation()

    useEffect(() => {


        const userInfo = dataUserInfo?.filter((item) => item?.Data.Username === user)
        setUserInformation(userInfo)

    }, [dataUserInfo])

    return (
        <List display="flex" flexWrap="wrap" h="100%">
            <ListItem display="flex" w="30%" mb="40px" >
                <Text>نام پدر:</Text>
                <Text pr="20px">{userInformation?.[0]?.Data?.FatherName}</Text>
            </ListItem>

            <ListItem display="flex" w="30%">
                <Text>جنسیت :</Text>
                <Text pr="20px" >
                    {`${userInformation?.[0]?.Data?.Gender === 0 ? ("مونث") : ("مذکر")}`}
                </Text>
            </ListItem>

            <ListItem display="flex" w="30%">
                <Text>تاریخ تولد :</Text>
                <Text pr="20px" >{userInformation?.[0]?.Data?.BirthDate}</Text>
            </ListItem>
            <ListItem display="flex" w="30%" mb="40px">
                <Text>کد ملی :</Text>
                <Text pr="20px" >{userInformation?.[0]?.Data?.NationalCode}</Text>
            </ListItem>
            <ListItem display="flex" w="30%">
                <Text> شماره تلفن :</Text>
                <Text pr="20px" >{userInformation?.[0]?.Data?.Phone}</Text>
            </ListItem>
            <ListItem display="flex" w="30%">
                <Text>  کد پستی :</Text>
                <Text pr="20px" >{userInformation?.[0]?.Data?.PostalCode}</Text>
            </ListItem>
            <ListItem display="flex" w="30%" mb="40px" >
                <Text>   آدرس :</Text>
                <Text pr="20px" >{userInformation?.[0]?.Data?.Address}</Text>
            </ListItem>
            <ListItem display="flex" w="30%" >
                <Text>   وضعیت :</Text>
                <Text pr="20px" >
                    {`${userInformation?.[0]?.Data?.Status === 0 ? ("غیرفعال") : ("فعال")}`}
                </Text>
            </ListItem>
            <ListItem display="flex" w="30%" >
                <Text>   وضعیت ایمیل :</Text>
                <Text pr="20px" >
                    {`${userInformation?.[0]?.Data?.EmailConfirmed ?
                        ("تایید شده") : ("تایید نشده")}`}
                </Text>
            </ListItem>
            <ListItem display="flex" w="30%">
                <Text>   وضعیت شماره تلفن :</Text>
                <Text pr="20px" >
                    {`${userInformation?.[0]?.Data?.PhoneNumberConfirmed ?
                        ("تایید شده") : ("تایید نشده")}`}
                </Text>
            </ListItem>
        </List>

    )
}

export default GeneralInfo