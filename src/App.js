import Expenses from './components/Expenses';

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
      amount: 7.49,
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
      amount: 50.00,
      date: new Date(2021, 9, 4),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses}/>
    </div>
  )
}

export default App;
