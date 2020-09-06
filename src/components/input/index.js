import React from 'react';
import { TextField } from '@material-ui/core';

function InputComponent(props) {
   
    return (
    <TextField
    className = 'AllField'
    type= {props.type}
    id="outlined-basic" 
    label={props.label} 
    variant="outlined"
    placeholder= {props.placeholder}
    onChange = {props.onChange}
    value= {props.value}
    error= {props.error}
    
    />
);

}


export default InputComponent;