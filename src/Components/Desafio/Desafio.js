import React from "react";
import Typed from 'react-typed'

export class Desafio extends React.Component {
    render() {
      return (
        <div className="conteinerDesafio">
          <p className="textoDesafio">O uso inteligente de <br/>
              dados para transormar <br/>
              a saúde{' '}
              <Typed
                strings={[
                  "da Júlia.",
                  "do Antonio.",
                  "do Brasil."
                ]}
                typeSpeed ={150}
                backSpeed = {150}
                loop
              />
          </p>
          
        </div>
      )
    }
  }

  export default Desafio;

