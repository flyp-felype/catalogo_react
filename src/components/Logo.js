import React, { Component } from 'react';
import logozema from '../images/ZemaLogo_nova.png' // relative path to image 


export default class Logo extends Component{
    render(){
        return(
        <div className="col-md-12">
            <div className="logo-wrapper">
                <a href="index.html" className="logo">
                    <img src={logozema} alt="logo Zema"/>
                </a>
            </div>
        </div>
        )
    }

}

