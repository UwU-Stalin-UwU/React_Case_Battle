import { useEffect, useState } from "react";

export function useBalance() {
  const [balance, setBalance] = useState(
    Number(localStorage.getItem("balance") || 0)
  );

  useEffect(() => {
    const handler = () => {
      setBalance(Number(localStorage.getItem("balance") || 0));
    };

    window.addEventListener("balanceUpdate", handler);

    return () => window.removeEventListener("balanceUpdate", handler);
  }, []);

  return balance;
}
