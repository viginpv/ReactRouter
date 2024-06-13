import React, { useReducer, useState } from 'react'

const UseReducer = () => {
    const InitialValue = 0
    const [state1, setstate] = useState()

    function display(state, action) {
        console.log(action.ok, 'ssssss');
        console.log(state.hello, 'hhhh');

        if (action.clr == 'green') {

            setstate(action.clr)
        }
        if (action.clr == 'blue') {
            setstate(action.clr)
        }
        if (action.clr == 'yellow') {
            setstate(action.clr)

        }
        switch (action.ok) {
            case "inc":
                { return state = state + 1 }
            case "dec":
                { return state = state > 0 ? state - 1 : 0 }
            case "reset":
                { return state = 0 }
        }

    }
    const [state, dispatch] = useReducer(display, InitialValue)
    return (
        <div>
            <h1 style={{ color: state1 }} >{state}</h1>
            <button onClick={() => dispatch({ ok: 'inc', clr: 'green' })}>increment</button>
            <button onClick={() => dispatch({ ok: 'dec', clr: 'blue' },)}>decrement</button>
            <button onClick={() => dispatch({ ok: 'reset', clr: 'yellow' },)}>reset</button>
        </div>
    )
}

export default UseReducer