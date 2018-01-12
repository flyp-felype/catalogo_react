import React, { Component } from 'react';
import ItemMenu from './ItemMenu'
import Search from './Search'

export default class Nav extends Component {
    render(){
        return(
            
                <nav className="clearfix">
                
                    <ul id="nav" className="main-nav">
                        <ItemMenu url="" label="Home" />
                        <ItemMenu url="" label="Produtos" />
                        <ItemMenu url="" label="Categorias" />
                        <ItemMenu url="" label="Familia" />
                     </ul>
                   <Search />
                </nav>
        )
    }
}
