import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';

import Facebook from '../../img/logo-facebook.svg';
import Instagram from '../../img/logo-instagram.svg';
import GitHub from '../../img/logo-github.svg';

function Footer(props) {
    return (
        <div>
            <img className='FooterImg' src={props.ImgFooter} alt='Imagem de efeito de onda'/>

            <div className='FooterContainer'>

                <div className='FooterContainer1'>

                    <img src={props.logo} alt='Logotipo'/>

                    <p className='FooterConteudo'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla quam, hendrerit lacinia vestibulum a, ultrices quis sem.
                </p>

                    <p>
                        <img className='IconContato' src={props.phone} alt='Icone de um telefone'/> Phone: +55 (11)9.2004-8400
                </p>
                    <p>
                        <img className='IconContato' src={props.email} alt='Logo do Gmail' /> feoliveira.eduardo@gmail.com
                </p>

                    <div className='RedeSocial'>
                        <a href='https://www.facebook.com/Felipe.Eduardo.Rodrigues.D' target='_blank'>
                            <img src={Facebook} alt='Logo do Facebook'/>
                        </a>
                        
                        <a href='https://www.instagram.com/felipe_eduardo_oliveira/'
                        target='_blank'>
                            <img src={Instagram} alt='Logo do Instagram'/>
                        </a>
                        
                        <a href='https://github.com/FelipeEduardoOliveira'
                        target='_blank'>
                        <img src={GitHub} alt='Logo do Github'/>
                        </a>
                            
                            
                        
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
