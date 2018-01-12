import React, { Component } from 'react';

export default class ItemMenu extends Component{
    render(){
        return(
        <li className="shop-submenu-area selected">
            <a href="{this.props.url}">{this.props.label}</a>         
        </li>
        )
    }

}