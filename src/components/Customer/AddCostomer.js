import React from 'react'
import './AddCustomer.css'
import { connect } from 'react-redux'
import {addCustomer} from '../../store/actions/customerActions'

class AddCustomer extends React.Component{
  state = {
    name  : '',
    age   : '',
    birth : '',
    job   : '',
    gender: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id] : e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.props)
    alert(this.state.name + ' 님이 등록되었습니다.')
    this.props.addCustomer(this.state)
    this.props.history.push('/');
  }
  handleRadio = (e) => {
    this.setState({
      gender : e.target.value
    })
  }
  render(){
    return(
      <div className="addCustomerWrap">
        <div className="addCustomerContainer">
          <h1>고객추가</h1>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label>이름</label>
              <input type="text" id="name" onChange={this.handleChange}/>
            </div>
            <div>
              <label>나이</label>
              <input type="text" id="age" onChange={this.handleChange}/>
            </div>
            <div>
              <label>생년월일</label>
              <input type="text" id="birth" onChange={this.handleChange}/>
            </div>
            <div>
              <label>직업</label>
              <input type="text" id="job" onChange={this.handleChange}/>
            </div>
            <div>
              <label>성별</label>
              <input 
                type="radio"
                name="gender"
                value="남성" 
                checked={this.state.gender === "남성"}
                onChange={this.handleRadio}
              />남자
              <input 
                type="radio" 
                name="gender"
                value="여성" 
                checked={this.state.gender === "여성"}
                onChange={this.handleRadio}
              />여자
            </div>
            <button>추가</button>
          </form>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    addCustomer : (newCustomer) => dispatch(addCustomer(newCustomer))
  }
}
export default connect(null,mapDispatchToProps)(AddCustomer)