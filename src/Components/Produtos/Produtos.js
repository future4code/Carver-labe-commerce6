import React from "react";
import styled from "styled-components";


const AreaProdutos = styled.section`
  width: 60%;
  padding: 1%;
  height: 90vh;
`;

const HeadProdutos = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  select{
    border: none;
    border-bottom: 1px solid black;
  }
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
  border-radius: 2%;
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 5%;
  margin-left:2%;
  box-shadow: 7px 7px 21px 0px rgba(0, 0, 0, 0.75);

  div {
    display: flex;
    flex-direction: column;
    padding: 10%;
    p {
      margin: 5px 0;
    }
  }

  button {
    margin: 0 auto;
    border: 1px solid black;
    background-color: transparent;
    padding: 3%;
    background-image: url("https://img.freepik.com/fotos-gratis/estrelas-e-galaxia-espaco-ceu-noite-universo-preto-fundo-estrelado-de-starfield-brilhante_146539-85.jpg?size=626&ext=jpg");
    color: white;
    font-weight: 600;
  }

  button:hover{
    cursor:pointer
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
                      Adcionar Ao Carrinho
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
            <b>{props.produtos.length}</b> produtos carregados
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
