import React from 'react'

const TransactionList = () => {
  return (
    <div className='transition-list'>
      <h3>History</h3>
      <ul id='list' className='list'>
        <li className='transition-list-'>
            Cash<span>-$400</span>
        </li>
      </ul>
    </div>
  )
}

export default TransactionList
