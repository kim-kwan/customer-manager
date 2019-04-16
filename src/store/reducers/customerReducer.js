import * as types from '../actions/customerActions'

const initState = {
  preItem : 0 ,
  getItem : 10 ,
  keyword : '',
  customerList : [],
  searchList : []
}

const customerReducer = (state = initState , action) => {
  switch(action.type){
    case types.GET_CUSTOMERS :
      // console.log('GET_CUSTOMER');
      let result = action.list.slice(state.preItem , state.getItem)
      return {
        ...state,
        customerList : action.list,
        searchList : result
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
      let getInit = 10;
      let searchData = state.customerList.filter( data => {
        return data.name.indexOf(action.keyword) > -1 ;
      })
      searchData = searchData.slice(state.preItem, getInit)
      return{
        ...state,
        getItem : getInit,
        keyword : action.keyword,
        searchList : searchData
      }

    case types.SCROLLED_CUSTOMERS : 
      let get = state.getItem + 10 ;
      let scrolledData = state.customerList.filter( data => {
        return data.name.indexOf(state.keyword) > -1 ;
      })
      scrolledData = scrolledData.slice( state.preItem , get)
      return{
        ...state,
        getItem : get,
        searchList : scrolledData
      }

    default :
      return state

  }
}

export default customerReducer