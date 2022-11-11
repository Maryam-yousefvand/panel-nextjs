
import { getAllUser, getUserBankInfo, getUserInformation, getUserSummary, login, signOut } from "@features/api/auth";

import { useMutation, useQuery } from "react-query";
import { toast } from "react-toastify";

export const useAllUser = () => {
    return useQuery(['userList'], getAllUser)
}

export const useLogin = () => {
    return useMutation(login, {
        onSuccess: ({ }) => {
            toast.success("باموفقیت وارد شدید")
        }
    })
}

export const useSignOut = () => {
    return useMutation(signOut, {
        onSuccess: ({ }) => {
            // toast.success("باموفقیت خارج شدید")
            localStorage.removeItem("user")
            window.location.pathname = "/"
        }
    })
}


export const useUserSummary = () => {
    return useQuery(['userSummary'], getUserSummary)
}

export const useUserBankInfo = () => {
    return useQuery(['userBankInfo'], getUserBankInfo)
}

export const useUserInformation = () => {
    return useQuery(['userInformation'], getUserInformation)
}

