import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './style.css';

import ImgExemplo from '../../../img/TelaExemplo.svg';
import IconMensagem from '../../../img/icon-messages.svg';
import IconCommunities from '../../../img/icon-communities.svg';



class SectionOne extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className='ContainerSection'>
                <h2 className='Title'>
                    Buld The Community Your Fans Will Love
                </h2>
                <p>
                    Huddle re-imagines the way we build communities. You have a voice, but so does
                    your audience. Create connections with your users as you engage in genuine discussion.
                </p>
                <Link to='/pricing'>
                    <button className='GetStarted'>
                    
                            Get Started For Free
                        
                    </button>
                </Link>

                <div className='ImgExemplo'>
                    <img src={ImgExemplo} alt='Exemplo de como ficaria o trabalho' />
                </div>

                <div className='Informations'>
                    <div>
                    <img className='Icon' src={IconCommunities} alt='Icone de comunidade'/>
                        <h3 className='Text1'>1.4k +</h3>
                        <p className='Text2'>Communities Formed</p>
                    </div>

                    <div>
                        <img className='Icon' src={IconMensagem} alt='Icone de mensagem de texto'/>
                        <h3 className='Text1'>2.7m +</h3>
                        <p className='Text2'>Messages Sent</p>
                    </div>


                </div>
            </div>
        );
    }
}

export default SectionOne;