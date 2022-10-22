import React from 'react'

const isIncome = Math.round(Math.random())

const InforCard = () => {
  return (
    <div style={{ textAlign: 'center', padding: '0 10px'}}>
      Try saying: <br />
      Add {isIncome ? 'Income ' : 'Expense '} 
      for {isIncome ? '$100 ' : '$50 '} 
      in Category {isIncome ? 'Business ' : 'Travel '} 
      for {isIncome ? 'Monday ' : 'next Tuesday '}
    </div>
  )
}

export default InforCard