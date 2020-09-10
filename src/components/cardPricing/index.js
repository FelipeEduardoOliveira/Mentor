import React from 'react';
import './style.css';

function CardPricing(props){

    

    const styleCard = {
        backgroundImage: props.Plano ==='professional' ? 'linear-gradient(hsl(236, 72%, 79%) , hsl(237, 63%, 64%))'
        : 'linear-gradient(white, white)',
        color: props.Plano ==='professional' ? 'white' : 'hsl(232, 13%, 33%)',
        width: props.Plano ==='professional' ? '270px' : '250px',
        height: props.Plano ==='professional' ? '420px' : '400px',
    }

    const styleTitle = {
        color: props.Plano ==='professional' ? 'white' : 'hsl(233, 13%, 49%)',
        width: '99%',
        textAlign:'center',
        fontSize: '15px'
        
    }

    return(
        <div>
            <div className='CardPricing' style={styleCard}>
                <p className='Title' style={styleTitle}>{props.Plano}</p>
                <div className='TitlePrice'>
                 <p className='Cifrao'>$</p> <p className='Price'>{props.Valor}</p>
                </div>
                <div className='Desc'>
                <p >{props.Storage}</p>
                <p >{props.Users}</p>
                <p>{props.Send}</p>
                </div>
                

                <button className='ButtonLearn'>
                    Learn more
                </button>
            </div>
        </div>
    );
}

export default CardPricing;