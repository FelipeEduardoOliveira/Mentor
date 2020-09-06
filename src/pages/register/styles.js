import Styled from 'styled-components';

export const Container = Styled.div`
display: flex;
flex-direction: column;
max-width: 800px;
margin:0 auto;
margin-top: 200px;

img{
    
    width: 400px;
    margin: 0 auto;
    margin-bottom: 80px;
}

div{
    display: flex;
    flex-direction: column;
    margin: 0 auto;

    .MuiOutlinedInput-input{
        width: 300px;
        
    }

    .AllField{
        margin: 10px 0;
    }

    button{
        border-radius: 25px;
    } 
}

p{
     margin: 0 auto;
     padding: 20px 0 ;
    }


    .MuiButton-colorInherit{
        background-color: #F1B46D;
    }
    .MuiButton-colorInherit:hover{
        background-color: green;
    }
`;