import React,{useState,useContext} from 'react'
import { GlobalContext } from '../Context/GlobalState';

const AddTransaction = () => {
    const [text,setText]=useState('');
    const[amount,setAmount]=useState();

    const {addTransaction} = useContext(GlobalContext);

    const onSubmit = e =>{
      e.preventDefault();

      const newTransaction = {
        id: Math.floor(Math.random()*100000000),
        text,
        amount:+amount
      }
      addTransaction(newTransaction);

      setText('');
      setAmount("");
    }   

  return (
    <div  className='transaction'>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <p>Text</p>
        <input type='text' value={text} onChange={(e)=>setText(e.target.value)} placeholder='Enter text..'></input>
        <p>Amount<br/>(negative-expense,positive-income)</p>
        <input type='number' value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder='Enter amount..'></input>
        <button>Add transaction</button>
      </form>
    </div>
  )
}

export default AddTransaction
