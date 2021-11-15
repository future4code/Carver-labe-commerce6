import React from 'react'
import styled from 'styled-components'

const ProdutoCarrinho = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  border-bottom: 1px solid bisque;
    div{
      display: flex;
    }
    p{
        margin-right: 5px;
    }
    img{
        width: 10%;
        cursor: pointer;
    }
`;

export default function Carrinho(props) {
    return (
        <ProdutoCarrinho>
            <div>
                <p><b>{props.produto.quantidade}x</b></p>
                <p>{props.produto.produto.nome}</p>
                <p><b>{props.produto.produto.preco}</b></p>
            </div>
            <img src="https://icon-library.com/images/explode-icon/explode-icon-20.jpg" value={props.produto.produto.id} onClick={()=>props.funcao(props.produto.produto.id)}/>
        </ProdutoCarrinho>
    )
}
