
import { api } from "@features/api";


export const getAllUser = async () => {
    const { data } = await api.get('/AdminUserSearch')
    return data
}

export const login = async (user) => {
    // const user = { username, password }
    const { data } = await api.post('/login', user)
    return data
}

export const signOut = async (values) => {
    const { data } = await api.post('/UserSignOut', values)
    return data
}

export const getUserSummary = async () => {
    const { data } = await api.get("/UserSummary")
    return data
}

export const getUserBankInfo = async () => {
    const { data } = await api.get("/UserBankInfo")
    return data?.[0].Data
}

export const getUserInformation = async () => {
    const { data } = await api.get('/UserMy')
    return data
}