import express from "express";
import type { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

const dummyData = {
  user: {
    name: "Nikita",
  },
  accounts: [
    {
      accountNumber: "1234567890",
      balance: 5000,
      nickname: "Savings Account",
    },
    {
      accountNumber: "0987654321",
      balance: 1500,
      nickname: "Checking Account",
    },
    {
      accountNumber: "5287654321",
      balance: 150,
      nickname: "Salary Account",
    },
    {
      accountNumber: "0987654326",
      balance: 100,
      nickname: "loan Account",
    },
  ],
  transactions: [
    {
      id: 1,
      accountNumber: "1234567890",
      decription: "Grocery Shopping",
      type: "debit",
      ammount: 150,
      time: "2024-10-01T10:30:00Z",
    },
    {
      id: 1,
      accountNumber: "1234567890",
      decription: "Grocery Shopping",
      type: "debit",
      ammount: 150,
      time: "2024-10-01T10:30:00Z",
    },
    {
      id: 2,
      accountNumber: "0987654321",
      decription: "Salary Credit",
      type: "credit",
      ammount: 3000,
      time: "2024-10-02T09:00:00Z",
    },
  ],
};

app.use(cors());
app.use(express.json());

app.get("/api/health", (req: Request, res: Response) => {
  res.json({ message: "API working 🚀" });
});

// /user - GET, POST, DELETE

app.get("/api/user", (req: Request, res: Response) => {
  res.json(dummyData.user);
});

// /account - GET, POST, DELETE

app.get("/api/accounts", (req: Request, res: Response) => {
  res.json(dummyData.accounts);
})

// /account/{id}/transactions - GET, POST
app.get("/api/accounts/:accountNumber/transactions", (req: Request, res: Response) => {
  const { accountNumber } = req.params;
  const transactions = dummyData.transactions.filter(
    (tx) => tx.accountNumber === accountNumber
  );
  res.json(transactions);
})



app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});