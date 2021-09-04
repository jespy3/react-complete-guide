import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Laptop',
      amount: 1999.99,
      date: new Date(2021, 4, 4),
    },
    {
      id: 'e2',
      title: 'Boba',
      amount: 7.48,
      date: new Date(2021, 8, 30),
    },
    {
      id: 'e3',
      title: 'Life Chair',
      amount: 899.99,
      date: new Date(2020, 3, 7),
    },
    {
      id: 'e4',
      title: 'Webhosting service (1 month)',
      amount: 50,
      date: new Date(2021, 9, 4),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
