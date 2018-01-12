import React, { Component } from 'react';
import Logo from './Logo';
import Carrinho from './Carrinho'
import Nav from './Nav'

export default class Header extends Component {
    render(){
        return(
            <header>
             <div className="header-main">
              <div className="container">
                    <div className="row">   
                        <div className="col-md-6">                
                            <Logo/>    
                        </div>  
                        <div className="col-md-6">
                            <Carrinho quantidade="0" />            
                        </div>
                    </div>
                </div>                
                        <Nav />                    
                  </div>
          </header>
        );
    }
}