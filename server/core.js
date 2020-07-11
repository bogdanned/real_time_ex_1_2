function fibo(n) {
  if (n < 2) return 1;
  else return fibo(n - 2) + fibo(n - 1);
}

function expensiveTaskList(n) {
  for (let i = 0; i < n; i++) {
    fibo(i);
  }
  return true;
}

module.exports = {
  fibo,
  expensiveTaskList,
};
