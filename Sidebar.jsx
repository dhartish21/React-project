import React from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom';

import Signin from '../Pages/Sign-in';
import TableWithCRUD from './Table';

function Sidebar() {
  return(
    <div>
  <side id="sidebar-example3" className="sidebar sidebar-blue bg-dark flex-column align-items-stretch p-8">
    <a className="sidebar-brand" href="#">Admin Panel</a>
    
    <ul className="sidebar-nav ">
     
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/">Index</NavLink>
                                    </li>
                                    
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/about"> About</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/faq">Faq</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/product">Product</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/productsdetail">Products detail</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/contact">Contact </NavLink>
                                    </li>
                                    
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/signin">Sign-in </NavLink>
                                    </li>
                                    </ul>

                                
   </side>
   <TableWithCRUD/>
   
                                     
{(() => {
                                        if (localStorage.getItem('user_id')) {
                                            return (
                                                <>
                                                    <li className="nav-item">
                                                        <NavLink className="nav-link" to="/story">Story</NavLink>
                                                    </li>

                                                    <li className="nav-item">
                                                        <a className="nav-link" onClick={Signin} href="javascript:void(0)">Sign-in</a>
                                                    </li>
                                                </>
                                            )
                                        }
                                        else {
                                            return (
                                                <li className="nav-item">
                                                    <NavLink className="nav-link" to="/signup">Signup</NavLink>
                                                </li>
                                            )
                                        }
                                    })()}

                                  
                                 
    </div>
  )
}

export default Sidebar
