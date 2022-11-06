import { QueryClient } from "react-query";
import axios from "axios";

export const api = axios.create({
    baseURL: ""
})

export const queryClient = new QueryClient()