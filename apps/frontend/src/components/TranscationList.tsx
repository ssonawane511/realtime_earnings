import type { transaction } from "../type";
import TransactionRow from "./TransactionRow";

const TranscationList = ({
  transactionsList,
}: {
  transactionsList: transaction[] | null;
}) => {
  if (!transactionsList || transactionsList.length === 0) {
    return (
      <div className="empty-state">
        <svg className="empty-state-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <h3 className="empty-state-title">No transactions found</h3>
        <p className="empty-state-description">
          This account doesn't have any transactions yet. Transactions will appear here once they are recorded.
        </p>
      </div>
    );
  }

  return (
    <div className="transactions-section">
      <h2 className="section-title">Transactions</h2>
      <table className="transactions-table">
        <thead className="table-header">
          <tr>
            <th>Description</th>
            <th>Type</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Account</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {transactionsList.map((transaction) => (
            <TransactionRow key={transaction.id} transaction={transaction} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TranscationList;
