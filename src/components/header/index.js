import React from 'react';
import './style.css';

import img from '../../img/logo.svg';


function Header(props){
    return(
        <div className='Container'>
            <img src={img}/>

        <button>
            {props.btnName}
        </button>
        </div>
    );
}

export default Header;