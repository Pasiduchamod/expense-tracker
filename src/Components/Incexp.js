import React, {useContext} from 'react'
import { GlobalContext } from '../Context/GlobalState';

const Incexp = () => {
  const {transactions} = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const income = amounts
    .filter(item =>item>0)
    .reduce((acc,item) => (acc+= item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter(item => item<0).reduce((acc,item) =>(acc+=item),0)*-1
  ).toFixed(2);

  return (
    <div className='incexp'>
        <div className='inc'>
          <h2>Income</h2>
          <p id='money-plus'>{income}</p>
        </div>
        <div className='exp'>
           <h2>Expense</h2>
           <p id='money-minus'>{expense}</p>
        </div> 
    </div>
  )
}

export default Incexp
