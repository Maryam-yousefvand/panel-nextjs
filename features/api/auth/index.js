
import { api } from "@features/api";
import axios from "axios";


export const login = async (user) => {
    const { data } = await api.post('/User/SignIn',
        {
            MobileNumber: "09117115755",
            Email: "",
            Password: "@404Fallahi",
            AuthCode: 0
        }

        // {
        //     MobileNumber: "09999999999",
        //     Email: "",
        //     Password: "@Mojtaba123",
        //     AuthCode: 0
        // }
    )
    // localStorage.setItem("token", data)
    return data
}

export const logOut = async () => {
    const { data } = await api.get('/User/LogOut', {
        headers: {
            Authorization: "09999999999:4e005746-ba5d-4170-ad3e-367c2b2f233c"
        }
    })
    return data
}

export const getAllUser = async () => {
    const { data } = await api.post('Admin/User/Search', {

        MobileNumber: "09117115755",
        Email: "",
        Password: "@404Fallahi",
        AuthCode: 0

    }, {
        headers: {
            Authorization: "09999999999:4e005746-ba5d-4170-ad3e-367c2b2f233c"
        }
    })
    return data
}




export const getUserProfile = async ({ queryKey }) => {
    const { data } = await api.get(`Admin/User/Profile?username=${queryKey[1]}`, {
        headers: {
            Authorization: "09999999999:4e005746-ba5d-4170-ad3e-367c2b2f233c"
        }
    })
    return data || []
}

export const getUserSummary = async () => {
    const { data } = await api.get("/User/Summary", {
        headers: {
            Authorization: "09999999999:4e005746-ba5d-4170-ad3e-367c2b2f233c"
        }
    })
    return data
}

export const getUserBankInfo = async () => {
    const { data } = await api.get("/User/BankInfo", {
        headers: {
            Authorization: "09999999999:4e005746-ba5d-4170-ad3e-367c2b2f233c"
        }
    })
    return data
}

export const getUserInformation = async () => {
    const { data } = await api.get('/User/My', {
        headers: {
            Authorization: "09999999999:4e005746-ba5d-4170-ad3e-367c2b2f233c"
        }
    })
    return data
}


export const getAdminUserBankInfo = async ({ queryKey }) => {
    const { data } = await api.get(`Admin/User/BankInfo?username=${queryKey[1]}`, {
        headers: {
            Authorization: "09999999999:4e005746-ba5d-4170-ad3e-367c2b2f233c"
        }
    })

    return data
}