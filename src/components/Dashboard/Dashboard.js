import React from 'react'
import './Dashboard.css'
import { connect } from 'react-redux'
import { getCustomers , scrolledCustomers} from '../../store/actions/customerActions'
import ListCustomer from '../Customer/ListCustomer'
import SearchList from '../Search/SearchCustomer'
class Dashboard extends React.Component{
  
  componentDidMount(){
    this.props.getCustomers();
    window.addEventListener('scroll' , this.infiniteScroll )
  }
  
  componentWillUnmount(){
    window.removeEventListener('scroll' , this.infiniteScroll )
  }

  infiniteScroll = () => {
    if((window.innerHeight + window.scrollY) >= document.body.offsetHeight){
      window.removeEventListener('scroll' , this.infiniteScroll)
      setTimeout(()=>{
        this.props.scrolledCustomers();
        window.addEventListener('scroll' , this.infiniteScroll)
      },500)
    }

  }

  render(){
    return(
      <div className="dashBoard">
        <SearchList infiniteScroll={this.infiniteScroll}/>
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
    getCustomers : () => dispatch(getCustomers()),
    scrolledCustomers : () => dispatch(scrolledCustomers())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);