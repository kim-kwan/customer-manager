import axios from 'axios'

export const GET_CUSTOMERS = 'GET_CUSTOMERS'
export const ADD_CUSTOMER = 'ADD_CUSTOMER'
export const EDIT_CUSTOMER = 'EDIT_CUSTOMER'
export const DELETE_CUSTOMER = 'DELETE_CUSTOMER'
export const SEARCH_CUSTOMERS = 'SEARCH_CUSTOMERS'

export const getCustomers = () => {
  // console.log('action')
  
  return(dispatch) => {
    axios.get('https://customer-manager-pro.firebaseio.com/customer.json')
    .then( (res) => {
      let list = []
      for(let key in res.data){
        res.data[key].id = key
        list = [...list , res.data[key]]
      }
      dispatch({type : GET_CUSTOMERS , list})
    })
    .catch( (err) => {
      console.log('get'+err)
    })
  }
}

export const addCustomer = (newCustomer) => {
  return(dispatch) => {
    // console.log(newCustomer , 'from action')
    axios.post('https://customer-manager-pro.firebaseio.com/customer.json' , newCustomer)
    .then((res) => {
      // console.log(res)
      dispatch({type : ADD_CUSTOMER , newCustomer})
    })
    .catch( (err) => {
      console.log('add'+err)
    })
  }
}

export const deleteCustomer = (id) => {
  return(dispatch) => {
    // console.log(editCustomer , 'from action')
    axios.delete('https://customer-manager-pro.firebaseio.com/customer/'+id+'.json')
    .then((res) => {
      // console.log(res)
      dispatch({type : DELETE_CUSTOMER , id})
    })
    .catch( (err) => {
      console.log('delete'+err)
    })
  }
}

export const editCustomer = (editCustomer) => {
  return(dispatch) => {
    // console.log(editCustomer , 'from action')
    axios.put('https://customer-manager-pro.firebaseio.com/customer/'+editCustomer.id+'.json' , editCustomer)
    .then((res) => {
      // console.log(res)
      dispatch({type : EDIT_CUSTOMER , editCustomer})
    })
    .catch( (err) => {
      console.log('edit'+err)
    })
  }
}

export const searchCustomer = (keyword) => {
  return(dispatch) => {
    dispatch({type : SEARCH_CUSTOMERS, keyword})
  }
}
