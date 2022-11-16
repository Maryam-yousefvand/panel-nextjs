import Login from '@components/Login'
import { useLogin } from '@features/hooks/auth'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'


export default function Home() {
  const [user, setUser] = useState()
  const { data } = useLogin()
  console.log(data);
  const router = useRouter()
  useEffect(() => {

    axios.post('https://api.exgain.ir/wallet/api/v1/User/SignIn',
      // {
      //   MobileNumber: "09999999999",
      //   Email: "",
      //   Password: "@Mojtaba123",
      //   AuthCode: 0
      // }

      {
        MobileNumber: "09117115755",
        Email: "",
        Password: "@404Fallahi",
        AuthCode: 0
      }

    ).then((res) => {
      console.log(res);

    })
  }, [])

  return (
    <div>
      <Login />
    </div>
  )
}
