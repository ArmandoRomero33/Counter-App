import React  from "react";
import PropTypes from 'prop-types';

const PrimeraApp = ( {saludo, subtitulo} ) => {


    return (
        <>
        <h1>{ saludo}</h1>
            {/*<pre> { JSON.stringify (saludo)} </pre>*/}
            <p> { subtitulo}</p>
         </>
    );
    
} 

PrimeraApp.PropTypes = {
    saludo: PropTypes.string.isRequired
  
}
PrimeraApp.defauldProps = {
    subtitulo: 'Soy un subtitulo'  
}

export default PrimeraApp;