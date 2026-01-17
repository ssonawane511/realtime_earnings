import type { transaction } from "../type.ts";

const TransactionRow = ({ transaction }: { transaction: transaction }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month} ${day}, ${year}`;
  };

  const getTransactionIcon = (type: string) => {
    if (type === "credit") {
      return (
        <svg className="transaction-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      );
    }
    return (
      <svg className="transaction-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
      </svg>
    );
  };

  return (
    <tr>
      <td>
        <div className="transaction-description">
          {getTransactionIcon(transaction.type)}
          <span>{transaction.decription}</span>
          <svg className="transaction-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </td>
      <td>
        <span className={`transaction-type ${transaction.type}`}>
          {transaction.type === "credit" ? "Credit" : "Debit"}
        </span>
      </td>
      <td>
        <span className={`transaction-amount ${transaction.type}`}>
          {transaction.type === "credit" ? "+" : "-"}${Math.abs(transaction.ammount).toLocaleString()}
        </span>
      </td>
      <td>
        <span className="transaction-date">{formatDate(transaction.time)}</span>
      </td>
      <td>
        <div className="transaction-account">
          <span className="account-badge">{transaction.accountNumber.slice(-4)}</span>
        </div>
      </td>
    </tr>
  );
};

export default TransactionRow;
