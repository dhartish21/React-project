import React from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import Signin from '../Pages/Sign-in';

function Header1() {

      const redirect = useNavigate();
        const logout = () => {
        localStorage.removeItem('user_id');
        localStorage.removeItem('user_name');
        toast.success('Logout Success');
        return redirect('/');

    }
        
    return (
        <div className="hero_area">
            {/* header section strats */}
            <header className="header_section">
                <div className="header_top">
                    <div className="container-fluid">
                        <div className="contact_nav">
                            <a href>
                                <i className="fa fa-phone" aria-hidden="true" />
                                <span>
                                    Call : +01 123455678990
                                </span>
                            </a>

                            <a href>
                                {(() => {
                                    if (localStorage.getItem('user_id')) {
                                        return (
                                            <>
                                                <i className="fa fa-user " aria-hidden="true" />
                                                <span>
                                                    hi... {localStorage.getItem('user_name')}
                                                </span>
                                            </>
                                        )
                                    }
                                })()}



                                <i className="fa fa-envelope ml-3" aria-hidden="true" />
                                <span>
                                    Email : demo@gmail.com
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="header_bottom">
                    <div className="container-fluid">
                        <nav className="navbar navbar-expand-lg custom_nav-container ">
                            <NavLink className="navbar-brand" to="/">
                                <span>
                                    
                                </span>
                            </NavLink>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className> </span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ">
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/">Index</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/about"> About</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/product">Product</NavLink>
                                    </li>
                                   
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/contact">Contact </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/faq">Faq </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/signin">Sign-in </NavLink>
                                    </li>
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





                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
           

  


                       
                    </div>
         
     


    )
}

export default Header1