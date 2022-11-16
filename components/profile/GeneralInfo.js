import { List, ListItem, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

const GeneralInfo = ({ user, data, username }) => {

    const [userInformation, setUserInformation] = useState()


    return (
        <List display="flex" flexWrap="wrap" h="100%">
            <ListItem display="flex" w="30%" mb="40px" >
                <Text>نام :</Text>
                <Text pr="20px">{data?.Data?.FirstName}</Text>
            </ListItem>
            <ListItem display="flex" w="30%" mb="40px" >
                <Text>نام خانوادگی:</Text>
                <Text pr="20px">{data?.Data?.LastName}</Text>
            </ListItem>
            <ListItem display="flex" w="30%" mb="40px" >
                <Text>نام پدر:</Text>
                <Text pr="20px">{data?.Data?.FatherName}</Text>
            </ListItem>

            <ListItem display="flex" w="30%">
                <Text>جنسیت :</Text>
                <Text pr="20px" >
                    {`${data?.Data?.Gender === 0 ? ("مونث") : ("مذکر")}`}
                </Text>
            </ListItem>

            <ListItem display="flex" w="30%">
                <Text>تاریخ تولد :</Text>
                <Text pr="20px" >{data?.Data?.BirthDate}</Text>
            </ListItem>
            <ListItem display="flex" w="30%" mb="40px">
                <Text>کد ملی :</Text>
                <Text pr="20px" >{data?.Data?.NationalCode}</Text>
            </ListItem>
            <ListItem display="flex" w="30%">
                <Text> شماره تلفن :</Text>
                <Text pr="20px" >{data?.Data?.Phone}</Text>
            </ListItem>
            <ListItem display="flex" w="30%">
                <Text>  کد پستی :</Text>
                <Text pr="20px" >{data?.Data?.PostalCode}</Text>
            </ListItem>
            <ListItem display="flex" w="30%" mb="40px" >
                <Text>   آدرس :</Text>
                <Text pr="20px" >{data?.Address}</Text>
            </ListItem>
            <ListItem display="flex" w="30%" >
                <Text>   وضعیت :</Text>
                <Text pr="20px" >
                    {`${data?.Data?.Status}`}
                </Text>
            </ListItem>
            <ListItem display="flex" w="30%" >
                <Text>   وضعیت ایمیل :</Text>
                <Text pr="20px" >
                    {`${data?.Data?.EmailConfirmed ?
                        ("تایید شده") : ("تایید نشده")}`}
                </Text>
            </ListItem>
            <ListItem display="flex" w="30%">
                <Text>   وضعیت شماره تلفن :</Text>
                <Text pr="20px" >
                    {`${data?.Data?.PhoneNumberConfirmed ?
                        ("تایید شده") : ("تایید نشده")}`}
                </Text>
            </ListItem>
        </List>

    )
}

export default GeneralInfo