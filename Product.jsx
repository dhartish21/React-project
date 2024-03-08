import React from 'react'


function Product() {
  return (
    <div>
         
    <div>
  <header className="site-header section-padding d-flex justify-content-center align-items-center">
    <div className="container">
      <div className="row">
        <div className="col-lg-10 col-12">
          <h1>
            <span className="d-block text-primary">Choose your</span>
            <span className="d-block text-dark">favorite stuffs</span>
          </h1>
        </div>
      </div>
    </div>
  </header>
  <section className="products section-padding">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2 className="mb-5">New Arrivals</h2>
        </div>
        <div className="col-lg-4 col-12 mb-3">
          <div className="product-thumb">
            <a href="product-detail.html">
              <img src="images/product/evan-mcdougall-qnh1odlqOmk-unsplash.jpeg" className="img-fluid product-image" alt />
            </a>
            <div className="product-top d-flex">
              <span className="product-alert me-auto">New Arrival</span>
              <a href="#" className="bi-heart-fill product-icon" />
            </div>
            <div className="product-info d-flex">
              <div>
                <h5 className="product-title mb-0">
                  <a href="product-detail.html" className="product-title-link">Tree pot</a>
                </h5>
                <p className="product-p">Original package design from house</p>
              </div>
              <small className="product-price text-muted ms-auto">$25</small>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-12 mb-3">
          <div className="product-thumb">
            <a href="product-detail.html">
              <img src="images/product/jordan-nix-CkCUvwMXAac-unsplash.jpeg" className="img-fluid product-image" alt />
            </a>
            <div className="product-top d-flex">
              <span className="product-alert">Discounted Price</span>
              <a href="#" className="bi-heart-fill product-icon ms-auto" />
            </div>
            <div className="product-info d-flex">
              <div>
                <h5 className="product-title mb-0">
                  <a href="product-detail.html" className="product-title-link">Fashion set</a>
                </h5>
                <p className="product-p">Costume package</p>
              </div>
              <small className="product-price text-muted ms-auto">$35</small>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-12">
          <div className="product-thumb">
            <a href="product-detail.html">
              <img src="images/product/nature-zen-3Dn1BZZv3m8-unsplash.jpeg" className="img-fluid product-image" alt />
            </a>
            <div className="product-top d-flex">
              <a href="#" className="bi-heart-fill product-icon ms-auto" />
            </div>
            <div className="product-info d-flex">
              <div>
                <h5 className="product-title mb-0">
                  <a href="product-detail.html" className="product-title-link">Juice Drinks</a>
                </h5>
                <p className="product-p">Nature made another world</p>
              </div>
              <small className="product-price text-muted ms-auto">$45</small>
            </div>
          </div>
        </div>
        <div className="col-12">
          <h2 className="mb-5">Popular</h2>
        </div>
        <div className="col-lg-4 col-12 mb-3">
          <div className="product-thumb">
            <a href="product-detail.html">
              <img src="images/product/team-fredi-8HRKoay8VJE-unsplash.jpeg" className="img-fluid product-image" alt />
            </a>
            <div className="product-top d-flex">
              <span className="product-alert">Trending</span>
              <a href="#" className="bi-heart-fill product-icon ms-auto" />
            </div>
            <div className="product-info d-flex">
              <div>
                <h5 className="product-title mb-0">
                  <a href="product-detail.html" className="product-title-link">Package</a>
                </h5>
                <p className="product-p">Original package design from house</p>
              </div>
              <small className="product-price text-muted ms-auto">$50</small>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-12 mb-3">
          <div className="product-thumb">
            <a href="product-detail.html">
              <img src="images/product/quokkabottles-kFc1_G1GvKA-unsplash.jpeg" className="img-fluid product-image" alt />
            </a>
            <div className="product-top d-flex">
              <a href="#" className="bi-heart-fill product-icon ms-auto" />
            </div>
            <div className="product-info d-flex">
              <div>
                <h5 className="product-title mb-0">
                  <a href="product-detail.html" className="product-title-link">Bottle</a>
                </h5>
                <p className="product-p">Package design</p>
              </div>
              <small className="product-price text-muted ms-auto">$100</small>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-12 mb-3">
          <div className="product-thumb">
            <a href="product-detail.html">
              <img src="images/product/anis-m-WnVrO-DvxcE-unsplash.jpeg" className="img-fluid product-image" alt />
            </a>
            <div className="product-top d-flex">
              <a href="#" className="bi-heart-fill product-icon ms-auto" />
            </div>
            <div className="product-info d-flex">
              <div>
                <h5 className="product-title mb-0">
                  <a href="product-detail.html" className="product-title-link">Medicine</a>
                </h5>
                <p className="product-p">Original design from house</p>
              </div>
              <small className="product-price text-muted ms-auto">$200</small>
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


    </div>
  )
}

export default Product