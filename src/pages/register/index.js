import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import img from '../../img/Friendship.png';
import { AiOutlineRight } from 'react-icons/ai';



import ButtonComponent from '../../components/button';
import InputComponent from '../../components/input';

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nameInput: '',
            nikNameInput:'',
            passInput: '',
            confirmPassInput: ''
        }
        this.handdleConfirm = this.handdleConfirm.bind(this);
    }

    handdleConfirm(){
        const {nameInput, nikNameInput, passInput, confirmPassInput} = this.state;
        alert(`
            Nome: ${nameInput} \n
            Nik: ${nikNameInput} \n
            Password: ${passInput} \n
            Password confirm: ${confirmPassInput} \n
        
        
        `)
    }

    render() {
        return (
            <Container>
                <img src={img} />

                <div>

                    <InputComponent
                        label='Nome'
                        placeholder='Insira seu nome'
                        value={this.state.nameInput}
                        onChange={e => { this.setState({ nameInput: e.target.value }) }}

                    />

                    <InputComponent
                        label='NikName'
                        placeholder='Insira um NikName'
                        value={this.state.nikNameInput}
                        onChange={e => { this.setState({ nikNameInput: e.target.value }) }}

                    />

                    <InputComponent
                        type='password'
                        label='Senha'
                        placeholder='Insira sua senha'
                        value={this.state.passInput}
                        onChange={e => { this.setState({ passInput: e.target.value }) }}
                        error = {false}
                    />

                    <InputComponent
                        type='password'
                        label='Confirmar Senha'
                        placeholder='confirme sua senha'
                        value={this.state.confirmPassInput}
                        onChange={e => { this.setState({ confirmPassInput: e.target.value }) }}
                    />



                    <ButtonComponent
                        className='MuiButton-colorInherit'
                        color='inherit'
                        label='Cadastrar'
                        endIcon={<AiOutlineRight />}
                        onCLick={() => this.handdleConfirm()}
                    />
                </div>


            </Container>
        );
    }
}

export default Register;