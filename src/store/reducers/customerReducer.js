import * as types from '../actions/customerActions'

const initState = {
  customerList : [],
  searchList : [],
}

const customerReducer = (state = initState , action) => {
  switch(action.type){
    case types.GET_CUSTOMERS :
      // console.log('GET_CUSTOMER');
      return {
        ...state,
        customerList : action.list,
        searchList : action.list
      }

    case types.ADD_CUSTOMER :
      // console.log('ADD_CUSTOMER');
      const addData = state.customerList.concat(action.newCustomer)
      // console.log(addData)
      return {
        ...state,
        customerList: addData,
        searchList : addData
      }

    case types.EDIT_CUSTOMER :
      // console.log('EDIT_CUSTOMER' , state.customerList);
      const editData = state.customerList.map( data => {
        if(data.id === action.editCustomer.id){
          data = action.editCustomer
        }
        return data
      })
      return {
        ...state,
        customerList : editData,
        searchList : editData
      }

    case types.DELETE_CUSTOMER :
      const deleteData = state.customerList.filter( data => {
        return data.id !== action.id
      })
      return{
        ...state,
        customerList : deleteData,
        searchList : deleteData
      }
      
    case types.SEARCH_CUSTOMERS : 
      // console.log(action.keyword)
      const searchData = state.customerList.filter( data => {
        return data.name.indexOf(action.keyword) > -1 ;
      })
      return{
        ...state,
        searchList : searchData
      }
    default :
      return state

  }
}

export default customerReducer