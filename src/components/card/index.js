import React from 'react';
import {Foto, Cards, Info, Name, Date, Desc, Amigos} from './styles';

function Card(props) {

        return (
               
            <Cards>
                <div>
                    <Foto src={props.foto}/>
                </div>
                <Info>
                    <Name>{props.name ? props.name : 'Nome'}</Name>
                    <Date>{props.date ? props.date : 'Data de Nascimento'}</Date>
                    <Desc>{props.desc ? props.desc : 'Descrição'}</Desc>
                </Info>
                <Amigos>
                    22 Amigos
                </Amigos>
            </Cards>
            
    );
  

}


export default Card;