import React from 'react';
import './style.css';

import Facebook from '../../img/logo-facebook.svg';
import Instagram from '../../img/logo-instagram.svg';
import Twitter from '../../img/logo-twitter.svg';

function Footer(props) {
    return (
        <div>
            <img className='FooterImg' src={props.ImgFooter} />

            <div className='FooterContainer'>

                <div className='FooterContainer1'>

                    <img src={props.logo} alt='Logotipo'/>

                    <p className='FooterConteudo'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla quam, hendrerit lacinia vestibulum a, ultrices quis sem.
                </p>

                    <p>
                        <img className='IconContato' src={props.phone} /> Phone: +55 (11)9.2004-8400
                </p>
                    <p>
                        <img className='IconContato' src={props.email} /> feoliveira.eduardo@gmail.com
                </p>

                    <div className='RedeSocial'>
                        <img src={Facebook} />
                        <img src={Instagram}/>
                        <img src={Twitter}/>
                    </div>

                </div>

                <div className='FooterContainer2'>
                    <h1>
                        NEWSLETTER
                </h1>

                    <p className='FooterConteudo'>
                        To recieve tips on how to grow your community, sign up to our weekly newsletter. We’ll never send you spam or pass on your email address Subscribe
                </p>

                    <div className='InputNewsLetter'>
                        <input type='email' placeholder='example@example.com' />

                        <button className='ButtonSubs'>
                            Subscribe
                    </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Footer;
