import React from 'react'

const AddTransaction = () => {
  return (
    <div  className='transaction'>
      <h3>Add new transaction</h3>
      <form>
        <p>Text</p>
        <input type='text' placeholder='Enter text..'></input>
        <p>Amount<br/>(negative-expense,positive-income)</p>
        <input type='numeber' placeholder='Enter amount..'></input>
        <button>Add transaction</button>
      </form>
    </div>
  )
}

export default AddTransaction
