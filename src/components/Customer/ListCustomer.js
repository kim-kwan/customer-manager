import React from 'react'
import './ListCustomer.css'
import Customer from './Customer'

const ListCustomer = (props) => {
  const customer = props.listCustomer.map( item => {
    return(
      <Customer customer={item} key={item.id}/>
    )
  })
  return(
    props.listCustomer.length > 0 ? 
    (
    <table>
      <thead>
        <tr className="List-tr">
            <th>이름</th> 
            <th>직업</th>
            <th>생년월일</th>
            <th>나이</th>
            <th>성별</th>
            <th>편집</th>
        </tr>
      </thead>
      <tbody>
        {customer}
      </tbody>
    </table>
    ) : 
    (
    <div className="empty">
      <h2> Data Empty </h2>
    </div>
    )
  )
}

export default ListCustomer;