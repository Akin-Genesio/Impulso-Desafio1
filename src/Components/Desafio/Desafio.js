import React from "react";
import Typed from 'react-typed'


export class Desafio extends React.Component {
    render() {
      return (
        <div>
          <p>O uso inteligente de <p/> 
              dados para transormar <p/> 
              a saúde{' '}
              <Typed
                strings={[
                  "da Júlia.",
                  "do Antonio.",
                  "do Brasil."
                ]}
                typeSpeed ={100}
                backSpeed = {100}
                loop
              />
          </p>
          
        </div>
      )
    }
  }

  export default Desafio;

/**
 * <Typed
                strings={[
                  "da Júlia.",
                  "do Antonio.",
                  "do Brasil."
                ]}
                typeSpeed ={150}
                backSpeed = {150}
                loop
              />

              <Typical
              loop={Infinity}
              steps={[
                "da Júlia.",
                1000,
                "do Antonio.",
                1000,
                "do Brasil.",
                1000
              ]}
             />
 */