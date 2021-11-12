import React from 'react'
import styled from 'styled-components'

const ProdutoCarrinho = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export default function Carrinho() {
    return (
        <ProdutoCarrinho>
            <p>{carrinho.quantidade}</p>
            <p>{carrinho.produto.nome}</p>
            <button>Remover</button>
        </ProdutoCarrinho>
    )
}
