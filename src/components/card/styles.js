import Styled from 'styled-components';


export const Cards = Styled.div`
border: 1px solid silver;
margin: 0 10px;
max-width: 300px;
display: flex;
flex-direction: column;
border-radius: 20px;
background-color: white;
`;

export const Foto = Styled.img`
max-width: 300px;
height: 300px;
border-top-left-radius: 20px;
border-top-right-radius: 20px;
`;

export const Info = Styled.div`

`;

export const Name = Styled.p`
    margin: 0;
    padding: 7px 5px;
    text-transform: capitalize;
    font-size: 20px;
    font-weight: bold;
`;

export const Date = Styled.p`

    margin: 0;
    padding: 0 5px;
    border-top: 1px solid black;
    font-size: 16px;
    color: silver;

`;
export const Desc = Styled.div`
    display: flex;
    margin: 0;
    padding: 0 5px;
    border-top: 1px solid black;
    font-size: 18px;
    color: black;
    max-width: 300px;

`;

export const Amigos = Styled.p`
    display: flex;
    margin: 0;
    padding: 5px 0;
    justify-content: center;
    border-top: 1px solid black;
    font-size: 12px;
    color: black;

`;