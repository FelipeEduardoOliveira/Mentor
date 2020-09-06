import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Container} from './styles';
import img from '../../img/Friendship.png';
import {AiOutlineRight}  from 'react-icons/ai';



import ButtonComponent from '../../components/button';
import InputComponent from '../../components/input';

class Login extends Component{

    constructor(props){
        super(props);
        this.state ={
            nameInput: '',
            passInput: ''
        }
    }

    render(){
        return(
            <Container>
                <img src={img}/>

                <div>

                <InputComponent
                label= 'Nome'
                placeholder = 'Insira seu nome'
                onChange={ e => {this.setState({nameInput: e.target.value})}}
                
               />

                <InputComponent
                type = 'password'
                label= 'Senha'
                placeholder = 'Insira sua senha'
                value= {this.state.passInput}
                onChange={ e => {this.setState({passInput: e.target.value})}}
                />
                   
                    
                    
                    <ButtonComponent
                    className='MuiButton-colorInherit'
                    color='inherit' 
                    label = 'Entrar'
                    endIcon= {<AiOutlineRight/>}
                    onCLick= {() => alert('Teste')}
                    />
                </div>

                <p>Ainda não é Cadastrado? <Link to={'/register'}>Clique Aqui</Link></p>

            </Container>
        );
    }
}

export default Login;