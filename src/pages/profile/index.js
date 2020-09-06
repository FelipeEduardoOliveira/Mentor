import React, { Component } from 'react';
import img from '../../img/imgteste.jpg';
import {Container} from './styles';
import Card from '../../components/card';

class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            foto: '',
            nome: '',
            aniversario: '',
            descrição: '',
            numeroDeAmigos: '',
        }
    }


    render() {
        return (
           <Container>
                <Card
                foto={img}
                name = 'Felipe Olivera'
                date = '17/06/1997 - 23 Anos'
                desc = '@Pagtel - Apaixonado por desenvolvimendo Web'
                />
           </Container>
        );
    }
}

export default Profile;