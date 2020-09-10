import React from 'react';
import './style.css';
import {Link} from 'react-router-dom';

import img from '../../img/logo.svg';


function Header(props){
    return(
        <div className='Container'>
            <Link to='/'> 
            <img src={img} alt='Logotipo'/>
            </Link>


        <Link to='/pricing'>
            <button>
                
                    {props.btnName}
                
            </button>
        </Link>
        </div>
    );
}

export default Header;