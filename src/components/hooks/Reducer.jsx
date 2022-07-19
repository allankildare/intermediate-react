import { useReducer } from 'react'

const limitRGB = (num) => (num < 0 ? 0 : num > 255 ? 255 : num)

const step = 20 // vai aumentando de 20 em 20

// é preciso criar um novo objeto para ser entendido como novo estado
const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT_R':
            return Object.assign({}, state, { r: limitRGB(state.r + step) })
        case 'DECREMENT_R':
            return Object.assign({}, state, { r: limitRGB(state.r - step) })
        case 'INCREMENT_G':
            return Object.assign({}, state, { g: limitRGB(state.g + step) })
        case 'DECREMENT_G':
            return Object.assign({}, state, { g: limitRGB(state.g - step) })
        case 'INCREMENT_B':
            return Object.assign({}, state, { b: limitRGB(state.b + step) })
        case 'DECREMENT_B':
            return Object.assign({}, state, { b: limitRGB(state.b - step) })
        default:
            return state
    }
}

export default function Reducer() {
    const [{ r, g, b }, dispatch] = useReducer(reducer, { r: 0, g: 0, b: 0 })

    return (
        <section>
           <h1>Exemplo do useReducer</h1>
           <p>Veja a cor sendo alterada no quadrado ao lado</p>
           
           <button onClick={() => dispatch({ type: 'INCREMENT_R' })}>+</button>
           <span>r</span>
           <button onClick={() => dispatch({ type: 'DECREMENT_R' })}>-</button>

           <button onClick={() => dispatch({ type: 'INCREMENT_G' })}>+</button>
           <span>g</span>
           <button onClick={() => dispatch({ type: 'DECREMENT_G' })}>-</button>

           <button onClick={() => dispatch({ type: 'INCREMENT_B' })}>+</button>
           <span>b</span>
           <button onClick={() => dispatch({ type: 'DECREMENT_B' })}>-</button>
           <textarea value={`background-color: rgb(${r}, ${g}, ${b});`} cols="30" rows="1" />

            <div style={{ backgroundColor: `rgb(${r}, ${g}, ${b})`, width: '100px', height: '100px' }}></div>
        </section>
    )
}