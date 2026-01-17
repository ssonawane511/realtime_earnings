interface user {
    name: string;
}

interface account {
    accountNumber: string;
    balance: number;
    nickname: string;
}

interface transaction {
    id: number;
    accountNumber: string;
    decription: string;
    type: string;
    ammount: number;
    time: string;
}

export type { user, account, transaction };