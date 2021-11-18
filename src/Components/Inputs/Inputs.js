import React from 'react'
import styled from 'styled-components'

const DivInput = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  input{
    border: none;
    border-bottom: 1px solid black;
  }
`

export default function Inputs(props) {
    return (
        <DivInput>
            {/* <label>{props.titulo}</label> */}
            <input
              value={props.valor}
              type={props.tipo}
              onChange={props.funcao}
              placeholder={props.place}
            />
          </DivInput>
    )
}
