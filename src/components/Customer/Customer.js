import React , { Fragment } from 'react'
import './Customer.css'
import DetailCustomer from './DetailCustomer'

class Customer extends React.PureComponent {
  state = {
    showDetail : false
  }
  handleClick = () => {
    this.setState({
      showDetail : !this.state.showDetail
    })
  }
  render(){
    const { customer } = this.props
    return(
      <Fragment>
        <tr className="Customer-tr" onClick={this.handleClick}>
          <td className="Customer-td">{customer.name}</td>
          <td className="Customer-td">{customer.job}</td>
          <td className="Customer-td">{customer.birth}</td>
          <td className="Customer-td">{customer.age}</td>
          <td className="Customer-td">{customer.gender}</td>
          <td className="Customer-td"><i className="far fa-edit"></i></td>
        </tr>
        {this.state.showDetail ? (
          <DetailCustomer customer={customer} modal={this.handleClick}/>
        ) : (
          <Fragment />
        )}
      </Fragment>
    )
  }
}

export default Customer;