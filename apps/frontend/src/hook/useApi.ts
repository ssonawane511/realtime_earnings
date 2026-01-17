import { useState, useEffect } from "react";
import type { user, account, transaction } from "../type";
import { getUser, getAccounts, getTransactions } from "../api";

const useApi = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [user, setUser] = useState<user | null>(null);
    const [accounts, setAccounts] = useState<account[] | null>(null);
    const [selectedAccount, setSelectedAccount] = useState<account | null>(null);
    const [transactions, setTransactions] = useState<transaction[] | null>(null);

    const fetchData = async () => {
        try {
            const userData = await getUser();
            if (userData)
                setUser(userData);

            const accountsData = await getAccounts();
            if (accountsData) {
                setAccounts(accountsData);
                setSelectedAccount(accountsData[0]);
            }

            if (accountsData && accountsData.length > 0) {
                const transactionsData = await getTransactions(accountsData[0].accountNumber);
                if (transactionsData)
                    setTransactions(transactionsData);
            }

        }
        catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        if (selectedAccount) {
            const fetchTransactions = async () => {
                setLoading(true);
                try {
                    const transactionsData = await getTransactions(selectedAccount.accountNumber);
                    if (transactionsData)
                        setTransactions(transactionsData);
                } catch (error) {
                    console.error("Error fetching transactions:", error);
                } finally {
                    setLoading(false);
                }
            }
            fetchTransactions();
        }
    }, [selectedAccount]);

    return {
        loading,
        user,
        accounts,
        selectedAccount,
        setSelectedAccount,
        transactions
    };
}

export default useApi;