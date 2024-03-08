import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { Link,useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';


function Signup() {
    const redirect=useNavigate();

    useEffect(()=>{
        if(localStorage.getItem('user_id'))
        {
            return redirect('/')
        }
    },[]);

    const [formvalue, setFormvalue] = useState({
        id: "",
        name: "",
        email: "",
        password: "",
        mobile: "",
        img: ""
    });

    const changeHandel = (e) => {
        setFormvalue({ ...formvalue, id: new Date().getTime().toString(), [e.target.name]: e.target.value });
        console.log(formvalue);
    }

    const vadidation = () => {
        var result = true;
        if (formvalue.name == "") {
            toast.error('Name Field is required !')
            result = false;
        }
        if (formvalue.email == "") {
            toast.error('email Field is required !')
            result = false;
        }
        if (formvalue.password == "") {
            toast.error('password Field is required !')
            result = false;
        }
        if (formvalue.mobile == "") {
            toast.error('mobile Field is required !')
            result = false;
        }
        if (formvalue.img == "") {
            toast.error('Image Field is required !')
            result = false;
        }
        return result;
    }

    const submitHandel = async (e) => {
        e.preventDefault();
        if (vadidation()) {
            const res = await axios.post(`http://localhost:3000/user`, formvalue);
            if (res.status == 201) {
                toast.success('Signup Success');
                setFormvalue({ ...formvalue, name: "", email: "", password: "", img: "", mobile: "" });
                return false;
            }
        }

    }

    return (
       <div>
  <section className="sign-in-form section-padding">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 mx-auto col-12">
          <h1 className="hero-title text-center mb-5">Sign Up</h1>
          <div className="social-login d-flex flex-column w-50 m-auto">
            <a href="#" className="btn custom-btn social-btn mb-4">
              <i className="bi bi-google me-3" />
              Continue with Google
            </a>
            <a href="#" className="btn custom-btn social-btn">
              <i className="bi bi-facebook me-3" />
              Continue with Facebook
            </a>
          </div>
          <div className="div-separator w-50 m-auto my-5"><span>or</span></div>
          <div className="row">
            <div className="col-lg-8 col-11 mx-auto">
              <form role="form" method="post">
                <div className="form-floating">
                  <input type="email" name="email" id="email" pattern="[^ @]*@[^ @]*" className="form-control" placeholder="Email address" required />
                  <label htmlFor="email">Email address</label>
                </div>
                <div className="form-floating my-4">
                  <input type="password" name="password" id="password" pattern="[0-9a-zA-Z]{4,10}" className="form-control" placeholder="Password" required />
                  <label htmlFor="password">Password</label>
                  <p className="text-center">* shall include 0-9 a-z A-Z in 4 to 10 characters</p>
                </div>
                <div className="form-floating">
                  <input type="password" name="confirm_password" id="confirm_password" pattern="[0-9a-zA-Z]{4,10}" className="form-control" placeholder="Password" required />
                  <label htmlFor="confirm_password">Password Confirmation</label>
                </div>
                <button type="submit" className="btn custom-btn form-control mt-4 mb-3">
                  Create account
                </button>
                <p className="text-center">Already have an account? Please <a href="sign-in.html">Sign In</a></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <footer className="site-footer">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-10 me-auto mb-4">
          <h4 className="text-white mb-3"><a href="index.html">Little</a> Fashion</h4>
          <p className="copyright-text text-muted mt-lg-5 mb-4 mb-lg-0">Copyright © 2022 <strong>Little Fashion</strong></p>
          <br />
          <p className="copyright-text">Designed by <a href="https://www.tooplate.com/" target="_blank">Tooplate</a></p>
        </div>
        <div className="col-lg-5 col-8">
          <h5 className="text-white mb-3">Sitemap</h5>
          <ul className="footer-menu d-flex flex-wrap">
            <li className="footer-menu-item"><a href="about.html" className="footer-menu-link">Story</a></li>
            <li className="footer-menu-item"><a href="#" className="footer-menu-link">Products</a></li>
            <li className="footer-menu-item"><a href="#" className="footer-menu-link">Privacy policy</a></li>
            <li className="footer-menu-item"><a href="#" className="footer-menu-link">FAQs</a></li>
            <li className="footer-menu-item"><a href="#" className="footer-menu-link">Contact</a></li>
          </ul>
        </div>
        <div className="col-lg-3 col-4">
          <h5 className="text-white mb-3">Social</h5>
          <ul className="social-icon">
            <li><a href="#" className="social-icon-link bi-youtube" /></li>
            <li><a href="#" className="social-icon-link bi-whatsapp" /></li>
            <li><a href="#" className="social-icon-link bi-instagram" /></li>
            <li><a href="#" className="social-icon-link bi-skype" /></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</div>


    )
}

export default Signup