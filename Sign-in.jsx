
import React, { useState } from 'react';
function Signin() {

   

  
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [error, setError] = useState('');
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          // Call your authentication API endpoint
          const response = await fetch('/api/authenticate', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
          });
    
          if (!response.ok) {
            throw new Error('Success');
          }
    
          // Handle successful authentication, e.g., redirect to another page
        } catch (error) {
          setError(error.message);
        }
      };
    
      return (
        <div>
          <h2>Sign In</h2>
          {error && <p>{error}</p>}
          <form onSubmit={handleSubmit}>
            <div>
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Sign In</button>
          </form>
        </div>
    );
    }
    
  
    

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

    
  


export default Signin