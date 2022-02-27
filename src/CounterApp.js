import React from 'react'
import ProTypes from 'prop/types'

const CounterApp = ({ value }) => {
    
    const handleadd = (e) => {
        console.log(e)
    }
    return (
        <>
             <h1>CounterApp</h1>
             <h2> { value } </h2>

             <button onClick={ (e) { console.log(e) } }lick>+1</button>

        </>
    )
}
CounterApp.propTypes = {
    value: ProTypes.number

}

export default CounterApp