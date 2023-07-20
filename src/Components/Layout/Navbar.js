import React, { useEffect, useReducer, useContext, createContext, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
// import { initalUserState, userReducer } from './Components/Reducer/userReducer';
import { UserContext } from '../../App';

const Navbar = () => {

  const navigate = useNavigate();
  const { state, dispatch } = useContext(UserContext);

  const logout = (event) => {
    event.preventDefault();
    localStorage.clear();
    dispatch({ type: 'LOGOUT' });
    navigate('/login')
  }

  const dynamicMenu = () => {
    if (state) {
      return [
        <li key="456" className="nav-item">
        <NavLink className="nav-link" exact to="/myposts">My All Posts</NavLink>
      </li>,

        <li key="456" className="nav-item">
          <NavLink className="nav-link" exact to="/create">Create Posts</NavLink>
        </li>


      ]
    }

    
    
  }




  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" exact to="/">Mypostapp</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li key="567" className="nav-item">
                <NavLink className="nav-link" exact to="/">Home</NavLink>
              </li>
              <li key="678" className="nav-item">
                <NavLink className="nav-link" exact to="/posts">Posts</NavLink>
              </li>

              {dynamicMenu()}
              <li key="678" className="nav-item">
                <NavLink className="nav-link" aria-current="page" exact to="/About">About us</NavLink>
              </li>
              <li key="765" className="nav-item">
                <NavLink className="nav-link" exact to="/Contact">Contact</NavLink>
              </li>
             


            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
              {state ? <button onClick={(event) => logout(event)} className="btn btn-primary m-2" type="submit">Logout</button>

                : <><li className="nav-item btn btn-primary m-2">
                  <NavLink className="nav-link " exact to="/Signup">Signup</NavLink>
                </li>
                  <li className="nav-item btn btn-primary m-2">
                    <NavLink className="nav-link " exact to="/Login">Login</NavLink>
                  </li>
                </>
              }


            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
