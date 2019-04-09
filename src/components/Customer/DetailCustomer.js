import React  from 'react'
import './DetailCustomer.css'
import { connect } from 'react-redux'
import { editCustomer , deleteCustomer } from '../../store/actions/customerActions'
class CustomerDetail extends React.Component{
  state = {
    customerDetail:{}
  }
  componentDidMount(){
    this.setState({
      customerDetail : this.props.customer
    })
  }
  
  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({
      customerDetail : {
        ...this.state.customerDetail,
        [e.target.name] : e.target.value 
      }
    })
  }

  handleEdit = () => {
    this.props.editCustomer(this.state.customerDetail);
    this.props.modal();
  }

  handleDelete = () => {
    this.props.deleteCustomer(this.state.customerDetail.id);
    this.props.modal();
  }

  handleClose = () => {
    this.props.modal();
  }
  render(){
    const { customerDetail } = this.state
    return(
      <tr className="detailWrap">
        <th className="detailTitle">{this.props.customer.name} 고객님</th>
        <th className="detailClose" onClick={this.handleClose}><i className="fas fa-times"></i></th>
        <td className="Detail-td">
          <label>이름</label><input type="text" name="name" value={customerDetail.name || ''} onChange={this.handleChange}/>
          <label>직업</label><input type="text" name="job" value={customerDetail.job || ''} onChange={this.handleChange}/>
          <label>생년월일</label><input type="text" name="birth" value={customerDetail.birth || ''} onChange={this.handleChange}/>
          <label>나이</label><input type="text" name="age" value={customerDetail.age || ''} onChange={this.handleChange}/>
          <label>성별</label><input type="text" name="gender" value={customerDetail.gender || ''} onChange={this.handleChange}/>
          <input className="editBtn" type="button" onClick={this.handleEdit} value="수정"/>
          <input className="deleteBtn" type="button" onClick={this.handleDelete} value="삭제"/>
        </td>
      </tr>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    editCustomer : (customerEditData) => dispatch(editCustomer(customerEditData)),
    deleteCustomer : (id) => dispatch(deleteCustomer(id))
  }
}

export default connect(null,mapDispatchToProps)(CustomerDetail);