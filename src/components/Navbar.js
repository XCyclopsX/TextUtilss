import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {

  const greencolor = {
    backgroundColor: "#013220",
    width: '25px', 
    height: '25px', 
  }
  const greycolor = {
    backgroundColor: "#A9A9A9",
    width: '25px', 
    height: '25px', 
  }
  const redcolor = {
    backgroundColor: "#8b0000",
    width: '25px', 
    height: '25px', 
  }

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="#">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/TextUtils">{props.homeText}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/About">{props.aboutText}</Link>
        </li>
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-primary" type="submit">Search</button>
      </form> */}
        <div className="mx-2">
          <button className="mx-1" style={greencolor} onClick={props.greenmode}></button>
          <button className="mx-1" style={greycolor} onClick={props.greymode}></button>
          <button className="mx-1" style={redcolor} onClick={props.redmode}></button>
        </div>
        <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'} mx-2`}>
            <input onClick={props.togglemode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.btntext}</label>
        </div>  
    </div>
  </div>
</nav>
  )
}

Navbar.propTypes = {title: PropTypes.string,
                    homeText: PropTypes.string,
                    aboutText: PropTypes.string}


