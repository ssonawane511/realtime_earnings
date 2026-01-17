import AccountCard from "./AccountCard";
import type { account } from "../type.ts";

const AccountList = ({
  accountList,
  onAccountSelect,
  selectedAccount,
}: {
  accountList: account[] | null;
  onAccountSelect: Function;
  selectedAccount: account | null;
}) => {
  if (!accountList || accountList.length === 0) {
    return null;
  }

  return (
    <div className="account-cards-container">
      {accountList.map((account) => (
        <AccountCard
          key={account.accountNumber}
          account={account}
          onAccountClick={onAccountSelect}
          isSelected={selectedAccount?.accountNumber === account.accountNumber}
        />
      ))}
    </div>
  );
};

export default AccountList;
