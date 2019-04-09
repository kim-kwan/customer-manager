import React , { Fragment } from 'react'
import { Link , NavLink } from 'react-router-dom'
import './Navbar.css'
class Navbar extends React.Component{
  state = {
    navToggle : true
  }
  navToggle = () => {
    this.setState({
      navToggle : !this.state.navToggle
    })
  }
  render(){
    let className = this.state.navToggle ? 'navShow' : 'navHide'
    return (
      <Fragment>
        <nav className={className}>
          <div className="navContainer">
            <div className="logo">
              <Link to="/">
                <i className="fas fa-user-cog"></i>
                <div>고객관리 매니저</div>
              </Link>
            </div>
            <ul className="menu">
              <li className="">
                <Link to="/">
                  홈
                  <i className="fas fa-home"></i>
                </Link>
              </li>
              <li>
                <NavLink to="/addCustomer">
                  고객추가
                  <i className="fas fa-user-plus"></i>
                </NavLink>
              </li>
            </ul>
            <div className="navClose" onClick={this.navToggle}>
              <i className="fas fa-times"></i>
            </div>
          </div>
        </nav>
        <div className="menuBar" onClick={this.navToggle}>
          <i className="fas fa-bars"></i>
        </div>
      </Fragment>
    )
  }
}

export default Navbar;