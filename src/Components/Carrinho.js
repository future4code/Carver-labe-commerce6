import React from 'react'
import styled from 'styled-components'

const ProdutoCarrinho = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export default function Carrinho(props) {
    return (
        <ProdutoCarrinho>
            <p>{props.produto.quantidade}</p>
            <p>{props.produto.produto.nome}</p>
            <button value={props.produto.produto.id} onClick={props.funcao}>Remover</button>
        </ProdutoCarrinho>
    )
}