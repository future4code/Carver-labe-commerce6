import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Carrinho from "./Components/Carrinho/Carrinho";
import Inputs from "./Components/Inputs/Inputs";
import Produtos from "./Components/Produtos/Produtos";

const Body = styled.div`
  border: 1px solid red;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
`
const Header = styled.header`
  
`
const FilterArea = styled.section`
  border: 1px solid black;
  height: 90vh;
  width: 25%;
  padding: 1%;
  h3 {
    margin-bottom: 10px;
  }
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
      {
        id: Math.floor(Date.now() * Math.random()).toString(36),
        imagem: "https://picsum.photos/400/400?a=2",
        nome: "Produto Seis",
        preco: "588,00",
      },

    ],
    quantidadeProdutos : null,
    bucarPorNome: "",
    valorMinimo: null,
    valorMaximo: null,
    ordem:null,
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

  componentDidUpdate(){
    localStorage.setItem("carrinho", JSON.stringify(this.state.carrinho))
  }

  componentDidMount(){
    let carrinhoPersistido = localStorage.getItem("carrinho")
    carrinhoPersistido = JSON.parse(carrinhoPersistido)
    this.setState({
      carrinho:carrinhoPersistido || []
    })
  }

  onChangeBucarPorNome = (event) => {
    this.setState({ bucarPorNome: event.target.value });
  };

  onChangeValorMinimo = (event) => {
    this.setState({ valorMinimo: event.target.value });
  };

  onChangeValorMaximo = (event) => {
    this.setState({ valorMaximo: event.target.value });
  };

  filtrarProdutos = () =>{
    let produtos = this.state.produtos
    let maiorValor = parseFloat(this.state.valorMaximo) || 1000000
    let menorValor = parseFloat(this.state.valorMinimo) || 0
    let nomeProduto = this.state.bucarPorNome

    if(nomeProduto === null){
      produtos = produtos.filter((produto) =>{
        return parseFloat(produto.preco) < maiorValor && parseFloat(produto.preco) > menorValor
      })
    }else{
      produtos = produtos.filter((produto) =>{
        return parseFloat(produto.preco) < maiorValor && parseFloat(produto.preco) > menorValor && produto.nome.includes(nomeProduto)
      })
    }

    return produtos
  }

  onChangeOrdem = (e) => {
    this.setState({
      ordem: e.target.value
    })
  }

  carregarProdutos = () => {
    //carrega os produtos de acordo com os filtros
    let produtos = this.filtrarProdutos()
    if(produtos.length == 0){
      return (
        <>
          <p>Produto Não Encontrado</p>
        </>
      );
    }

    //coloca os produtos de acordo com a orde
    if(this.state.ordem != null ){
      if(this.state.ordem == "Crescente"){
        produtos = produtos.sort((a,b)=>{
          return parseFloat(a.preco) - parseFloat(b.preco)
        })
      }else{
        produtos = produtos.sort((a,b)=>{
          return -(parseFloat(a.preco) - parseFloat(b.preco))
        })
      }
    }
    return produtos
  };

  adicionaCarrinho = (e) => {
    let produtoSelecionado = this.state.produtos.filter((produto) =>{
      return produto.id == e.target.value
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
        
      })
    }else{
      this.setState({
        carrinho:carrinhoCarregado 
      })
    } 
  };
 
  carrinhoProduto = () => {
    return this.state.carrinho.map((carrinho)=>{
      return (
        <Carrinho 
          produto={carrinho}
          funcao={this.removerProdutoCarrinho}
        />
      )
    })
  }

  removerProdutoCarrinho = (e) =>{
    let controle = 0;
    let produtosCarrinho = this.state.carrinho.map((item) => {
      if(item.produto.id == e.target.value && item.quantidade > 1){
        controle++
        item.quantidade--
      }

      return item
    })

    if(controle == 0){
      let carrinho = this.state.carrinho.filter((item) => {
        return item.produto.id != e.target.value
      })
      this.setState({
        carrinho : [...carrinho]
      })
    }else{
      this.setState({
        carrinho : produtosCarrinho
      })
    }

  }

  valorCarrinho = () => {
   let valorTotal = 0 
    this.state.carrinho.map((item) =>{
      valorTotal = (parseFloat(item.produto.preco) * parseFloat(item.quantidade)) + valorTotal
    })
    return valorTotal 
  }




  render() { 
    let carrinhoProduto = this.carrinhoProduto()
    return (
      <>
        <EstiloGlobal/>
        <header>Header</header>
        <Body>
          <FilterArea>
            <h3>Filtros</h3>
            <Inputs
              titulo="Valor Mínimo:"
              valor={this.state.valorMinimo}
              tipo="number"
              funcao={this.onChangeValorMinimo}
            />
            <Inputs
              titulo="Valor Máximo:"
              valor={this.state.valorMaximo}
              tipo="number"
              funcao={this.onChangeValorMaximo}
            />
            <Inputs
              titulo="Buscar por Nome:"
              valor={this.state.bucarPorNome}
              tipo="text"
              funcao={this.onChangeBucarPorNome}
              place="Camisa, Calça"
            />
          </FilterArea>
          <Produtos
            produtos={this.carregarProdutos()}
            funcaoOrdem={this.onChangeOrdem}
            funcaoAdcionarCarrinho={this.adicionaCarrinho}
          />
          <AreaCarrinho>
            <h3>Carrinho:</h3>
            {carrinhoProduto}
            
            <p>
              Valor total: <b>R$: {this.valorCarrinho()}</b>
            </p>
          </AreaCarrinho>
        </Body>
      </>
    );
  }
}

export default App;
