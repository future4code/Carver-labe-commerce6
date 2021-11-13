import React from "react";
<<<<<<< HEAD
import styled from "styled-components";
=======
>>>>>>> ef92236a74296edd9362cc463adb9798794fdea1
import styled, { createGlobalStyle } from "styled-components";
import Carrinho from "./Components/Carrinho/Carrinho";
import Inputs from "./Components/Inputs/Inputs";
import Produtos from "./Components/Produtos/Produtos";

import App extends React.Component from "./Imagens-Produtos"


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
=======

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
<<<<<<< HEAD
=======

>>>>>>> ef92236a74296edd9362cc463adb9798794fdea1
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
<<<<<<< HEAD
`;
=======
>>>>>>> ef92236a74296edd9362cc463adb9798794fdea1
 }
class App extends React.Component {
  state = {
    produtos: [
      {
        id: 1,
        imagem: "http://www.nasa.gov/sites/default/files/images/275039main_PLSS-OV_226x289.jpg",
        nome: "Suporte primário do sistema:PLS",
        preco: "41.000,00",
      },
      {
        id: Math.floor(Date.now() * Math.random()).toString(36),
        imagem: "http://www.nasa.gov/sites/default/files/images/275044main_upper_226x170.jpg",
        nome: "Parte superior do tronco",
        preco: "51.000,00",
      },
      {
        id: Math.floor(Date.now() * Math.random()).toString(36),
        imagem: "http://www.nasa.gov/sites/default/files/images/275034main_lower_226x413.jpg",
        nome: "Tronco inferior ",
        preco: "35.000,00",
      },
      {
        id: Math.floor(Date.now() * Math.random()).toString(36),
        imagem: "http://www.nasa.gov/sites/default/files/images/275028main_helm_226x189.jpg",
        nome: "Capacete",
        preco: "60.000,00",
      },
      {
        id: Math.floor(Date.now() * Math.random()).toString(36),
        imagem: "http://www.nasa.gov/sites/default/files/images/275021main_cca_226x170.jpg",
        nome: "Comunicações-CCA",
        preco: "15.000,00",
      },
      {
        id: Math.floor(Date.now() * Math.random()).toString(36),
        imagem: "http://www.nasa.gov/sites/default/files/images/275032main_lcvg-front_226x301.jpg",
        nome: "Roupa de Refrigeração Líquida e Ventilação",
        preco: "25.000,00",
      },
    ],
    quantidadeProdutos : null,

    bucarPorNome: "Produto1",

    bucarPorNome: "",
    valorMinimo: null,
    valorMaximo: null,
    ordem:null,
    carrinho:[
      {
        quantidade:1,
        produto:{
          id: 1,
          imagem: "http://www.nasa.gov/sites/default/files/images/275021main_cca_226x170.jpg",
          nome: "Comunicações-CCA",
          preco: "15.00,00",
        }
      }
    ]
  };


  componentDidUpdate(){
    localStorage.setItem("carrinho", JSON.stringify(this.state.carrinho))
  }

<<<<<<< HEAD



=======
>>>>>>> ef92236a74296edd9362cc463adb9798794fdea1
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
<<<<<<< HEAD
    }, () => console.log(this.state.ordem))
=======
>>>>>>> ef92236a74296edd9362cc463adb9798794fdea1
    })
  }

  carregarProdutos = () => {

    return this.state.produtos.map((produto) => {

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

<<<<<<< HEAD

    //cria o JFX dos produtos
    return produtos.map((produto) => {
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

  }
=======
>>>>>>> ef92236a74296edd9362cc463adb9798794fdea1

    return produtos
  };


  adicionaCarrinho = (e) => {
    let produtoSelecionado = this.state.produtos.filter((produto) =>{
      return produto.id == e.target.value
    })
<<<<<<< HEAD
=======






>>>>>>> ef92236a74296edd9362cc463adb9798794fdea1
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
<<<<<<< HEAD

      },() => console.log(this.state.carrinho))
=======
        
>>>>>>> ef92236a74296edd9362cc463adb9798794fdea1
      })
    }else{
      this.setState({
        carrinho:carrinhoCarregado 
<<<<<<< HEAD
      }, () => console.log(this.state.carrinho))
=======
>>>>>>> ef92236a74296edd9362cc463adb9798794fdea1
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
    let produtoSelecionado = this.state.produtos.filter((produto) =>{
      return produto.id == e.target.value
    })
    let controle = 0;
    let produtosCarrinho = this.state.carrinho.map((item) => {
      if(item.produto.id == e.target.value && item.quantidade > 1){
        controle++
        item.quantidade--
      }

    let carrinho = this.state.carrinho.filter((item) => {
      return item.produto.id != e.target.value
      return item
    })

    this.setState({
      carrinho : [...carrinho]
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
  carrinhoProduto = () => {
    return this.state.carrinho.map((carrinho)=>{
      return (
        <ProdutoCarrinho>
            <p>{carrinho.quantidade}</p>
            <p>{carrinho.produto.nome}</p>
            <button>Remover</button>
          </ProdutoCarrinho>
        <Carrinho 
          produto={carrinho}
          funcao={this.removerProdutoCarrinho}
        />
      )
    })
  }
  removerProdutoCarrinho = (e) =>{
    let produtoSelecionado = this.state.produtos.filter((produto) =>{
      return produto.id == e.target.value
    })
    let carrinho = this.state.carrinho.filter((item) => {
      return item.produto.id != e.target.value
    })
    this.setState({
      carrinho : [...carrinho]
    })
  }
  valorCarrinho = () => {
   let valorTotal = 0 
    let testeValor = this.state.carrinho.map((item) =>{
    this.state.carrinho.map((item) =>{
      valorTotal = (parseFloat(item.produto.preco) * parseFloat(item.quantidade)) + valorTotal
    })
    return valorTotal 
  }


<<<<<<< HEAD
  

  render() {

    let produtosCarregados = this.carregarProdutos() 
=======
>>>>>>> ef92236a74296edd9362cc463adb9798794fdea1
    render() { 
    let carrinhoProduto = this.carrinhoProduto()
    return (
<<<<<<< HEAD
      <Body>
        <FilterArea>
          <h3>Filtros</h3>

          <div>

          {/* <Filtro
          /> */}
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
          {/* <div>
            <label>Valor Mínimo:</label>
            <input
              value={this.state.valorMinimo}
              type="number"
              onChange={this.onChangeValorMinimo}
=======
>>>>>>> ef92236a74296edd9362cc463adb9798794fdea1
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
<<<<<<< HEAD
          </div>
          <div>
            <label>Valor Máximo:</label>
            <input
              value={this.state.valorMaximo}
              type="number"
              onChange={this.onChangeValorMaximo}
=======
>>>>>>> ef92236a74296edd9362cc463adb9798794fdea1
            <Inputs
              titulo="Valor Máximo:"
              valor={this.state.valorMaximo}
              tipo="number"
              funcao={this.onChangeValorMaximo}
            />
<<<<<<< HEAD
          </div>
          <div>
          </div> */}
          {/* <div>
            <label>Buscar por Nome:</label>
            <input
              value={this.state.bucarPorNome}
              type="text"
              placeholder="Produtos"
              onChange={this.onChangeBucarPorNome}
=======
>>>>>>> ef92236a74296edd9362cc463adb9798794fdea1
            <Inputs
              titulo="Buscar por Nome:"
              valor={this.state.bucarPorNome}
              tipo="text"
              funcao={this.onChangeBucarPorNome}
              place="Camisa, Calça"
            />
<<<<<<< HEAD
          </div>
          </div> */}
        </FilterArea>
        <AreaProdutos>
          <HeadProdutos>
=======
>>>>>>> ef92236a74296edd9362cc463adb9798794fdea1
          </FilterArea>
          <Produtos
            produtos={this.carregarProdutos()}
            funcaoOrdem={this.onChangeOrdem}
            funcaoAdcionarCarrinho={this.adicionaCarrinho}
          />
          <AreaCarrinho>
            <h3>Carrinho:</h3>
            {carrinhoProduto}
<<<<<<< HEAD

            <p>
              Quantidade de produtos: <b>{produtosCarregados.length}</b>
              Valor total: <b>R$: {this.valorCarrinho()}</b>
            </p>
            <div>
              <label>Ordenação:</label>

              <select>

              <select onClick={this.onChangeOrdem}>
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
          {carrinhoProduto}

          <p>
            Valor total: <b>{this.valorCarrinho()}</b>
          </p>
        </AreaCarrinho>





      </Body>
=======
            
            <p>
              Valor total: <b>R$: {this.valorCarrinho()}</b>
            </p>
>>>>>>> ef92236a74296edd9362cc463adb9798794fdea1
          </AreaCarrinho>
        </Body>
      </>
    );
  }
}
<<<<<<< HEAD
=======

>>>>>>> ef92236a74296edd9362cc463adb9798794fdea1
export default App;