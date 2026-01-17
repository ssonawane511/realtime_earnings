import axios from "axios"
import type { account, transaction, user } from "./type";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const getUser = async (): Promise<user> => {
    const response = await axios.get(`${BASE_URL}/user`);
    return response.data;
}

const getAccounts = async (): Promise<account[]> => {
    const response = await axios.get(`${BASE_URL}/accounts`);
    return response.data;
}

const getTransactions = async (id: string): Promise<transaction[]> => {
    const response = await axios.get(`${BASE_URL}/accounts/${id}/transactions`);
    return response.data;
}

export { getUser, getAccounts, getTransactions };