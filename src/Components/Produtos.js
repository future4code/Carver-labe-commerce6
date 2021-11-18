import React from "react";
import styled from "styled-components";


const AreaProdutos = styled.section`
  border: 1px solid green;
  width: 50%;
  padding: 1%;
  height: 90vh;
`;

const HeadProdutos = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const AreaCardProdutos = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
`;

const CardProdutos = styled.div`
  border: 1px solid black;
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 5%;
  margin-left:2%;
  div {
    display: flex;
    flex-direction: column;
    padding: 10%;
    p {
      margin: 5px 0;
    }
  }
  button {
    width: 70%;
    margin: 0 auto;
  }
`;

const montarProdutos = (produtos, funcao) => {
    //carrega os produtos de acordo com os filtros
    if(!produtos.length){
      let teste = <>
      <p>Produto Não Encontrado</p>
    </>
      return teste
    }else{
      let produtoMontado = produtos.map((produto) => {
          return (
              <CardProdutos key={produto.id}>
                  <img src={produto.imagem} />
                  <div>
                  <h5>{produto.nome}</h5>
                  <p>
                      R$<span>{produto.preco}</span>
                  </p>
                  <button value={produto.id} onClick={funcao}>
                      Adicionar Ao Carrinho
                  </button>
                  </div>
              </CardProdutos>
          )
      })

      return produtoMontado
    }

  };

export default function Produtos(props) {
  return (
    <AreaProdutos>
        <HeadProdutos>
            <p>
              Quantidade de produtos: <b>{props.produtos.length}</b>
            </p>
            <div>
              <label>Ordenação:</label>
              <select onClick={props.funcaoOrdem}>
                <option value="">Nenhum</option>
                <option value="Crescente">Crescente</option>
                <option value="Decrescente">Decrescente</option>
              </select>
            </div>
          </HeadProdutos>
        <AreaCardProdutos>
            {montarProdutos(props.produtos, props.funcaoAdcionarCarrinho)}
        </AreaCardProdutos>
    </AreaProdutos>
  );
}