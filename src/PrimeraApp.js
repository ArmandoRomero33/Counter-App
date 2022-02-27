import React  from "react";
import PropTypes from 'prop-types';

const PrimeraApp = ( {saludo}  ) => 


    return (
        <>
        <h1>{ saludo}</h1>
            {/*<pre> { JSON.stringify (saludo)} </pre>*/}
            <p>Mi primera PrimeraApp</p>
         </>
    );
    
} 

PrimeraApp.PropTypes = {
    saludo: PropTypes.string.isRequired

}

export default PrimeraApp;