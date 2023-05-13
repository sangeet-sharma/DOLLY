import { Component } from 'react';
import './Nav.css';
import { Menuitems } from './Menuitems' ;
import { Link } from "react-router-dom"; 


class Nav extends Component{
    state={clicked:false};
    handleClick = ()=>{
        this.setState({clicked: !this.state.clicked})
    }
    render(){
        return (
        
        <nav className='navbar'>
        <h1 className='nav-logo'>Hotel</h1>
        <div className="menu-icons" onClick= {this.handleClick}>
            <i className={this.state.clicked?"fas fa-times":"fas fa-bars"}></i> 
        </div>

        <ul className={this.state.clicked? "nav-menu active":"nav-menu"}>
          {Menuitems.map((item,index)=>{
            return(
                <li key={index}>
                <Link className={item.cName} to={item.url}>
                    <i class={item.icon}></i>{item.title}
                </Link>
            </li>
            );
          })}
         <Link to='/login'>
         <button >Sign In</button> 
         </Link>
        </ul>
        </nav>
        )
    }
} 
export default Nav;