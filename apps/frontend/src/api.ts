import axios from "axios"
import type { account, transaction, user } from "./type";

const BASE_URL = "http://localhost:4000/api";

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