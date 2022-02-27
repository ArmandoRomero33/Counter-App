import React, { useState}from 'react'
import ProTypes from 'prop/types'

const CounterApp = ({ value }) => {

   const [ counter, setCounter ] = useState(0);
 
    consthandleAdd = ( => {
        //setCounter( counter + 1);
        setCounter ( (c) => c + 1);
    })

   }
        
    
    return (
        <>
             <h1>CounterApp</h1>
             <h2> { value } </h2>

             <button onClick={ handleAdd } >+1</button>

        </>
    )

CounterApp.propTypes = {
    value: ProTypes.number

}

export default CounterApp