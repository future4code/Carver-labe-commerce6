import React from 'react'

export default function Inputs(props) {
    let placeholder = ""
    if(props.place == null){
      placeholder = ""
    }
    return (
        <div>
            <label>{props.titulo}</label>
            <input
              value={props.valor}
              type={props.tipo}
              onChange={props.funcao}
              placeholder={props.place}
            />
          </div>
    )
}
