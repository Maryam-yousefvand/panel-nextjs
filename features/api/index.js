import { QueryClient } from "react-query";
import axios from "axios";

export const api = axios.create({
    baseURL: "https://api.exgain.ir/wallet/api/v1"
    // baseURL: 'http://localhost:3001'
})

export const queryClient = new QueryClient()