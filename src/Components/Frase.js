import React from 'react';
import styled from '@emotion/styled'

const ContenedorFrase = styled.div`
padding: 2rem;
border-radius: .5rem;
background-color: #fff;
max-width: 800px;


@media ( min-width: 992px){
    margin-top: 10rem;
}

h1{
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    position: relative;
    padding-left: 1.6rem;

    &::before{
        content: open-quote;
        font-size: 7rem;
        position: absolute;
        left: -2rem;
        top: -2rem;
    }
}

p{
font-family: verdana, Geneva, Tahoma, sans-serif;
font-size: 1.6 rem;
text-align: right;
color: #666;
margin-top: 2rem;

}
`

const Frase = ({frase}) => {



    return ( 
        <ContenedorFrase>
    <h1>{frase.quote}</h1>
        <p> {frase.author} </p>
        </ContenedorFrase>
     );
}
 
export default Frase;