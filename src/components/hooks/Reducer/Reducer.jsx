import { useReducer } from "react";
import { Flex } from "../../../styles/Flex";
import styles from './Reducer.module.css'

const limitRGB = (num) => (num < 0 ? 0 : num > 255 ? 255 : num);

const step = 20; // vai aumentando de 20 em 20

// é preciso criar um novo objeto para ser entendido como novo estado
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT_R":
      return Object.assign({}, state, { r: limitRGB(state.r + step) });
    case "DECREMENT_R":
      return Object.assign({}, state, { r: limitRGB(state.r - step) });
    case "INCREMENT_G":
      return Object.assign({}, state, { g: limitRGB(state.g + step) });
    case "DECREMENT_G":
      return Object.assign({}, state, { g: limitRGB(state.g - step) });
    case "INCREMENT_B":
      return Object.assign({}, state, { b: limitRGB(state.b + step) });
    case "DECREMENT_B":
      return Object.assign({}, state, { b: limitRGB(state.b - step) });
    default:
      return state;
  }
};

export function Reducer() {
  const [{ r, g, b }, dispatch] = useReducer(reducer, { r: 0, g: 0, b: 0 });

  return (
    <section>
      <h1>Exemplo do useReducer</h1>
      <Flex>
      <Flex direction="column">
        <p>Veja a cor sendo alterada no quadrado ao lado</p>

        <div className={styles.colorProps}>
          <button onClick={() => dispatch({ type: "DECREMENT_R" })}>-</button>
          <span className={styles.colorProp}>r</span>
          <button onClick={() => dispatch({ type: "INCREMENT_R" })}>+</button>
        </div>

        <div className={styles.colorProps}>
          <button onClick={() => dispatch({ type: "DECREMENT_G" })}>-</button>
          <span className={styles.colorProp}>g</span>
          <button onClick={() => dispatch({ type: "INCREMENT_G" })}>+</button>
        </div>

        <div className={styles.colorProps}>
          <button onClick={() => dispatch({ type: "DECREMENT_B" })}>-</button>
          <span className={styles.colorProp}>b</span>
          <button onClick={() => dispatch({ type: "INCREMENT_B" })}>+</button>
          
        </div>
        <textarea
            value={`background-color: rgb(${r}, ${g}, ${b});`}
            cols="30"
            rows="1"
          />
      </Flex>

      <div
        style={{
          backgroundColor: `rgb(${r}, ${g}, ${b})`,
          width: "100px",
          height: "100px",
        }}
      ></div>
      </Flex>
    </section>
  );
}
