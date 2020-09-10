import React from 'react';
import './style.css';

function Card(props) {

    const Style = {
        backgroundColor:  props.ColorBackground,
        flexDirection: props.reverse ? 'row-reverse' : 'row',
        
    }

    return (
        <div className='Card' >
            <img className='CardBottom-Top' src={props.imgTop}/>
            <div className='Conteudo' style={Style}>

                <div className='ConteudoTexto' >
                    <h1>{props.Titulo}</h1>

                    <p>{props.Contexto}</p>
                </div>
                <img src={props.imgFundo} alt='Imagem que complementa o texto'/>

            </div>
            <img className='CardBottom-Top' src={props.imgBottom} />
        </div>
    );
}

export default Card;