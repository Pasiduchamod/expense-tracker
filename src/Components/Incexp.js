import React from 'react'

const Incexp = () => {
  return (
    <div className='incexp'>
        <div className='inc'>
          <h2>Income</h2>
          <p id='money-plus'>+$0.00</p>
        </div>
        <div className='exp'>
           <h2>Expense</h2>
           <p id='money-minus'>-$0.00</p>
        </div> 
    </div>
  )
}

export default Incexp
