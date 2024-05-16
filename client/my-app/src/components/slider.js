import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './slider.css';


export default function BootstrapCarousel() {
  return (
    
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://preview.colorlib.com/theme/bootstrap/carousel-11/images/hero_3.jpg" className="d-block w-100" alt="First slide" />
          <div className="carousel-caption custom-caption">
            <h5>
             New 
            </h5>
            
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://preview.colorlib.com/theme/bootstrap/carousel-11/images/hero_1.jpg" className="d-block w-100" alt="Second slide" />
          <div className="carousel-caption custom-caption">
            <h5>New</h5>
            
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://preview.colorlib.com/theme/bootstrap/carousel-11/images/hero_2.jpg" className="d-block w-100" alt="Third slide" />
          <div className="carousel-caption custom-caption">
            <h5>New</h5>
            
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
    </div>
  );
}
