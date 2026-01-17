"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
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
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get("/api/health", (req, res) => {
    res.json({ message: "API working 🚀" });
});
// /user - GET, POST, DELETE
app.get("/api/user", (req, res) => {
    res.json(dummyData.user);
});
// /account - GET, POST, DELETE
app.get("/api/accounts", (req, res) => {
    res.json(dummyData.accounts);
});
// /account/{id}/transactions - GET, POST
app.get("/api/accounts/:accountNumber/transactions", (req, res) => {
    const { accountNumber } = req.params;
    const transactions = dummyData.transactions.filter((tx) => tx.accountNumber === accountNumber);
    res.json(transactions);
});
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map