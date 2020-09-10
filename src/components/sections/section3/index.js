import React from 'react';
import {Link} from 'react-router-dom'
import './Style.css';


function LastSection(){
    return(
        <div className='LastSectionContainer'>
            <h1>
            Ready To Build Your Community?
            </h1>

            <Link to='/pricing'>
                <button className='GetStarted'>
                Get Started For Free
                </button>
            </Link>
            
        </div>
    );
}

export default LastSection;