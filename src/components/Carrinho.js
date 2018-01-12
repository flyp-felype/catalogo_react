import React, { Component } from 'react';

export default class Carrinho extends Component{
    render(){
        return(
        <div className="dropdown ht-cart ht-fl">
            <p>Quantidade no Carrinho:</p>
            <a data-toggle="dropdown" href="" className="button-cart"><span>{this.props.quantidade}</span></a>        
        </div>  
        )
    }
}

