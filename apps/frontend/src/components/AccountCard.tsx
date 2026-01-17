import type { account } from "../type";

const AccountCard = ({
  account,
  onAccountClick,
  isSelected,
}: {
  account: account;
  onAccountClick: Function;
  isSelected?: boolean;
}) => {
  const getInitials = (nickname: string) => {
    return nickname
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div
      className={`account-card ${isSelected ? "selected" : ""}`}
      onClick={() => onAccountClick(account)}
    >
      <div className="account-card-logo">
        {getInitials(account.nickname)}
      </div>
      <div className="account-card-content">
        <h3 className="account-card-name">{account.nickname}</h3>
        <p className="account-card-number">{account.accountNumber}</p>
        <p className="account-card-balance">${account.balance.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default AccountCard;
