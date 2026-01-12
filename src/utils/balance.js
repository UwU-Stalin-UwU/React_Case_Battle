export function getBalance() {
  return Number(localStorage.getItem("balance") || 0);
}

export function setBalance(value) {
  localStorage.setItem("balance", value);

  // Мгновенное обновление баланса во всех компонентах
  window.dispatchEvent(new Event("balanceUpdate"));
}

export function addBalance(amount) {
  const current = getBalance();
  setBalance(current + amount);
}

export function removeBalance(amount) {
  const current = getBalance();

  if (current >= amount) {
    setBalance(current - amount);
    return true;
  }

  return false;
}
