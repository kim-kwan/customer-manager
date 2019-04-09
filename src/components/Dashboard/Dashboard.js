import React from 'react'
import './Dashboard.css'
import { connect } from 'react-redux'
import { getCustomers } from '../../store/actions/customerActions'
import ListCustomer from '../Customer/ListCustomer'
import SearchList from '../Search/SearchCustomer'
class Dashboard extends React.Component{
  componentDidMount(){
    this.props.getCustomers();
    // axios.post('https://react-planner-1e811.firebaseio.com/customer.json', this.props.newData)
  }
  
  render(){
    return(
      <div className="dashBoard">
        <SearchList/>
        <ListCustomer listCustomer={this.props.customers}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    customers: state.customerReducer.searchList
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    getCustomers : () => dispatch(getCustomers())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);