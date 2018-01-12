import React, { Component } from 'react';
import Slide from '../images/slide/slide-1.png'

export default class Destaque extends Component{
    render(){
        return(
        <div className="main-banner-unit home-three  block-45">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="hero-unit">
                <h2>Welcome to <span>N-Shoes Store</span></h2>
                <div>
                  <h1>Best Sellers Shoes</h1>
                  <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat.</p>
                  <a href="product-grid.html" className="btn btn-theme-color">Go to Shop &nbsp;<i className="fa fa-angle-right"></i></a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="main-slide hidden-xs">
                <div id="main-slide-2" className="flexslider flexround">
                  <ul className="slides">
                    <li>
                      <img src={Slide} alt=""/>
                      <div className="flex-caption">
                        <h1>Product</h1>
                        <h1>$24.00</h1>
                        <a href="#">order now</a>
                      </div>
                    </li>

                    <li>
                      <img src={Slide} alt="" />
                      <div className="flex-caption">
                        <h1>Product</h1>
                        <h1>$54.00</h1>
                        <a href="#">order now</a>
                      </div>
                    </li>

                    <li>
                      <img src={Slide} alt="" />
                      <div className="flex-caption">
                        <h1>Product</h1>
                        <h1>$45.00</h1>
                        <a href="#">order now</a>
                      </div>
                    </li>

                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        )
    }
}