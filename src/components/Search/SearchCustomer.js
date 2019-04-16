import React from 'react'
import './Search.css'
import { connect } from 'react-redux'
import { searchCustomer } from '../../store/actions/customerActions'
class SearchCustomer extends React.Component{
  state = {
    keyword : ''
  }
  handleChange = (e) => {
    this.setState({
      keyword : e.target.value
    }, () => {
      this.props.searchCustomer(this.state.keyword)
    })

  }
  render(){
    return(
      <div className="searchBox">
        <input
          type="text"
          placeholder="이름으로 고객 찾기 " 
          value={this.state.keyword}
          onChange={(e)=>{this.handleChange(e)}}
        />
        <i className="fas fa-search" onClick={this.handleChange}></i>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    searchCustomer : (keyword) => dispatch(searchCustomer(keyword))
  }
}
export default connect(null,mapDispatchToProps)(SearchCustomer);