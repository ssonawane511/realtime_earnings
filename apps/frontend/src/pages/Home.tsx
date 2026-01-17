import { useState } from "react";
import AccountList from "../components/AccountList";
import TransactionList from "../components/TranscationList";
import useApi from "../hook/useApi";

const Home = () => {
  const [activeTab, setActiveTab] = useState("transactions");
  
  const {
    loading,
    user,
    accounts,
    selectedAccount,
    setSelectedAccount,
    transactions,
  } = useApi();

  const getInitials = (text: string) => {
    return text
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const filteredTransactions = transactions?.filter(
    (transaction) =>
      transaction.accountNumber === selectedAccount?.accountNumber
  ) || null;

  if (loading) {
    return (
      <div>
        <div className="loading-container">Loading...</div>
      </div>
    );
  }

  if (!selectedAccount) {
    return (
      <div>
        <div className="main-content">
          <div className="content-card">
            <div className="empty-state">
              <svg className="empty-state-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
              <h3 className="empty-state-title">No account selected</h3>
              <p className="empty-state-description">
                Please select an account to view details and transactions.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>      
      <div className="main-content">
        {/* Account Cards Selection */}
        <AccountList
          accountList={accounts}
          onAccountSelect={setSelectedAccount}
          selectedAccount={selectedAccount}
        />

        {/* Main Account Details Card */}
        <div className="content-card" style={{ marginTop: "24px" }}>
          {/* Account Header */}
          <div className="account-header">
            <div className="account-title-row">
              <div className="account-logo">
                {getInitials(selectedAccount.nickname)}
              </div>
              <h1 className="account-name">{selectedAccount.nickname}</h1>
              <div className="status-indicator"></div>
            </div>
            
            <div className="account-meta-row">
              <div className="meta-item">
                <span className="meta-label">Account Owner:</span>
                <div className="user-avatar">
                  {user ? getInitials(user.name) : "U"}
                </div>
                <span className="meta-value">{user?.name || "Unknown"}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Balance:</span>
                <span className="balance-amount">
                  ${selectedAccount.balance.toLocaleString()}
                </span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Account Number:</span>
                <span className="account-number">{selectedAccount.accountNumber}</span>
              </div>
            </div>
          </div>

          {/* Tabs Navigation */}
          <div className="tabs-container">
            <ul className="tabs-list">
              <li
                className={`tab-item ${activeTab === "transactions" ? "active" : ""}`}
                onClick={() => setActiveTab("transactions")}
              >
                <svg className="tab-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Transactions
              </li>
            </ul>
          </div>

          {/* Transactions Content */}
          {activeTab === "transactions" && (
            <TransactionList transactionsList={filteredTransactions} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
