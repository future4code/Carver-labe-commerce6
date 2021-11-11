import React from "react";
import styled from "styled-components";

const Body = styled.div`
  * {
    margin: 0;
    padding: 0;
  }

  border: 1px solid red;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const FilterArea = styled.section`
  border: 1px solid black;
  height: 90vh;
  width: 25%;
  padding: 1%;
  h3 {
    margin-bottom: 10px;
  }
`;

const AreaProdutos = styled.section`
  border: 1px solid green;
  width: 50%;
  padding: 1%;
  height: 90vh;
`;

const AreaCarrinho = styled.section`
  border: 1px solid yellow;
  padding: 1%;
  height: 90vh;
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  h3 {
    margin-bottom: 10px;
  }
`;
const ProdutoCarrinho = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
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
  justify-content: space-between;
`;
const CardProdutos = styled.div`
  border: 1px solid black;
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 5%;

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

class App extends React.Component {
  state = {
    produtos: [
      {
        id: 1,
        imagem: "https://picsum.photos/400/400?a=2",
        nome: "Produto Um",
        preco: "50,00",
      },
      {
        id: Math.floor(Date.now() * Math.random()).toString(36),
        imagem: "https://picsum.photos/400/400?a=2",
        nome: "Produto Dois",
        preco: "510,00",
      },
      {
        id: Math.floor(Date.now() * Math.random()).toString(36),
        imagem: "https://picsum.photos/400/400?a=2",
        nome: "Produto Tres",
        preco: "150,00",
      },
      {
        id: Math.floor(Date.now() * Math.random()).toString(36),
        imagem: "https://picsum.photos/400/400?a=2",
        nome: "Produto Quatro",
        preco: "250,00",
      },
      {
        id: Math.floor(Date.now() * Math.random()).toString(36),
        imagem: "https://picsum.photos/400/400?a=2",
        nome: "Produto Cinco",
        preco: "5,00",
      },
    ],
    quantidadeProutos : 0,
    bucarPorNome: "Produto1",
    valorMinimo: null,
    valorMaximo: null,
    carrinho:[
      {
        quantidade:1,
        produto:{
          id: 1,
          imagem: "https://picsum.photos/400/400?a=2",
          nome: "Produto Cinco",
          preco: "5,00",
        }
      }
    ]
  };

  onChangeBucarPorNome = (event) => {
    this.setState({ bucarPorNome: event.target.value });
  };

  onChangeValorMinimo = (event) => {
    this.setState({ valorMinimo: event.target.value });
  };

  onChangeValorMaximo = (event) => {
    this.setState({ valorMaximo: event.target.value });
  };

  carregarProdutos = () => {
    return this.state.produtos.map((produto) => {
      return (
        <CardProdutos>
          <img src={produto.imagem} />
          <div>
            <h5>{produto.nome}</h5>
            <p>R$<span>{produto.preco}</span></p>
            <button value={produto.id} onClick={this.adicionaCarrinho}>Adcionar Ao Carrinho</button>
          </div>
        </CardProdutos>
      );
    });
  };
  adicionaCarrinho = (e) => {
    let produtoSelecionado = this.state.produtos.filter((produto) =>{
      return produto.id == e.target.value
    })

    let produtoCarrinho = this.state.carrinho.filter((carrinho) => {
      console.log(carrinho.produto.id, e.target.value)
      return carrinho.produto.id == e.target.value
    })

   
    
    let controle = 0;
    let carrinhoCarregado =  this.state.carrinho.map((itemCarrinho)=>{
      if(itemCarrinho.produto.id == e.target.value){
        itemCarrinho.quantidade++
        controle++
      }
      return itemCarrinho
    })

    if(controle == 0){
      this.setState({
        carrinho : [...this.state.carrinho,{
          quantidade: 1, 
          produto : produtoSelecionado[0]
        }]
        
      },() => console.log(this.state.carrinho))
    }else{
      this.setState({
        carrinho:carrinhoCarregado 
      }, () => console.log(this.state.carrinho))
    } 
  };

  render() {
    let produtosCarregados = this.carregarProdutos()
    return (
      <Body>
        <FilterArea>
          <h3>Filtros</h3>
          <div>
            <label>Valor Mínimo:</label>
            <input
              value={this.state.valorMinimo}
              type="number"
              onChange={this.onChangeValorMinimo}
            />
          </div>
          <div>
            <label>Valor Máximo:</label>
            <input
              value={this.state.valorMaximo}
              type="number"
              onChange={this.onChangeValorMaximo}
            />
          </div>
          <div>
            <label>Buscar por Nome:</label>
            <input
              value={this.state.bucarPorNome}
              type="text"
              placeholder="Produtos"
              onChange={this.onChangeBucarPorNome}
            />
          </div>
        </FilterArea>
        <AreaProdutos>
          <HeadProdutos>
            <p>
              Quantidade de produtos: <b>4</b>
            </p>
            <div>
              <label>Ordenação:</label>
              <select>
                <option value="">Nenhum</option>
                <option value="Crescente">Crescente</option>
                <option value="Decrescente">Decrescente</option>
              </select>
            </div>
          </HeadProdutos>
          <AreaCardProdutos>
            {produtosCarregados}
          </AreaCardProdutos>
        </AreaProdutos>
        <AreaCarrinho>
          <h3>Carrinho:</h3>
          <ProdutoCarrinho>
            <p>2x</p>
            <p>Produto Um</p>
            <button>Remover</button>
          </ProdutoCarrinho>
          <ProdutoCarrinho>
            <p>1x</p>
            <p>Produto Dois</p>
            <button>Remover</button>
          </ProdutoCarrinho>
          <p>
            Valor total: <b>R$100,00</b>
          </p>
        </AreaCarrinho>
      </Body>
    );
  }
}

export default App;
