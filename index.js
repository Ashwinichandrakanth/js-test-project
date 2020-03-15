// Import stylesheets
import "./style.css";

const acctData = [
  {
    acctNum: "AAA - 1234",
    user: "Alice"
  },
  {
    acctNum: "AAA - 5231",
    user: "Bob"
  },
  {
    acctNum: "AAA - 9921",
    user: "Alice"
  },
  {
    acctNum: "AAA - 8191",
    user: "Alice"
  }
];
const balance = {
 "AAA - 1234": 4593.22,
 "AAA - 9921": 0,
 "AAA - 5231": 232142.5,
 "AAA - 8191": 4344
};

function getAccountNumbers(user, sortBy, sortDirection) {
  let accountNumbers = [];
  let filteredAcctData;

  if (user) {
    filteredAcctData = acctData.filter(account => account.user === user);
  } else {
    filteredAcctData = acctData;
  }

  if (sortBy) {
    let sortByPropertyName = 'acctNum';
    if(sortBy === 'balance') {
      filteredAcctData.forEach(account => {
        account.balance = balance[account.acctNum];
      });
      sortByPropertyName = 'balance';
    }

    sortDirection = sortDirection || 'asc';
    const isAscOrder = sortDirection === 'asc';
    filteredAcctData.sort((obj1, obj2) => {
      const val1 = isAscOrder ? obj1[sortByPropertyName] : obj2[sortByPropertyName];
      const val2 = isAscOrder ? obj2[sortByPropertyName] : obj1[sortByPropertyName];
      if (val1 > val2) {
        return 1;
      }
      if (val1 < val2) {
        return -1;
      }
      return 0;
    });
  }

  accountNumbers = filteredAcctData.map(account => account.acctNum);

  return accountNumbers;
}

console.log(getAccountNumbers("Bob"));
console.log(getAccountNumbers("Charlie"));
console.log(getAccountNumbers(undefined, "acctNum"));
console.log(getAccountNumbers("Alice", "balance"));
