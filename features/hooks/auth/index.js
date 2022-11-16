
import {
    getAdminUserBankInfo, getAllUser, getUserBankInfo,
    getUserInformation, getUserProfile, getUserSummary, login,
    logOut
} from "@features/api/auth";

import { useMutation, useQuery } from "react-query";
import { toast } from "react-toastify";

export const useAllUser = () => {
    return useMutation(getAllUser, {
        onSuccess: () => {
            // alert("ok")
        }
    })
}

export const useLogin = () => {
    return useMutation(login, {
        onSuccess: ({ }) => {
            toast.success("باموفقیت وارد شدید")
        }
    })
}

export const useLogOut = () => {
    return useQuery(['logOut'], logOut)
}

export const useUserProfile = queryKey => {
    return useQuery(['userProfile', queryKey], getUserProfile)
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

export const useAdminUserBankInfo = queryKey => {
    return useQuery(['adminUserBankInfo', queryKey], getAdminUserBankInfo)
}

