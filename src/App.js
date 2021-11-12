import React from "react";
import styled from "styled-components";
import Carrinho from "./Components/Carrinho/Carrinho";
import Inputs from "./Components/Inputs/Inputs";
import App extends React.Component from "./Imagens-Produtos"

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
        imagem: "https://static.netshoes.com.br/produtos/camisa-nike-park-dri-fit-masculina/26/HZM-6253-026/HZM-6253-026_zoom1.jpg?ts=1620763234&",
        nome: "Produto Um",
        preco: "50,00",
      },
      {
        id: Math.floor(Date.now() * Math.random()).toString(36),
        imagem: "https://static.netshoes.com.br/produtos/jaqueta-puffer-nike-sportswear-feminina/26/HZM-4718-026/HZM-4718-026_zoom1.jpg?ts=1611083384&",
        nome: "Produto Dois",
        preco: "510,00",
      },
      {
        id: Math.floor(Date.now() * Math.random()).toString(36),
        imagem: "https://static.netshoes.com.br/produtos/camiseta-lacoste-regular-fit/69/D66-6570-C69/D66-6570-C69_zoom1.jpg?ts=1615818967&",
        nome: "Produto Tres",
        preco: "150,00",
      },
      {
        id: Math.floor(Date.now() * Math.random()).toString(36),
        imagem: "https://static.netshoes.com.br/produtos/calca-jeans-skinny-calvin-klein-feminina/62/D70-6062-162/D70-6062-162_zoom1.jpg?ts=1626174075&",
        nome: "Produto Quatro",
        preco: "250,00",
      },
      {
        id: Math.floor(Date.now() * Math.random()).toString(36),
        imagem: "https://static.netshoes.com.br/produtos/meia-sem-cano-branca-pacote-c-1-par/14/U07-0032-014/U07-0032-014_zoom1.jpg?ts=1611689738&",
        nome: "Produto Cinco",
        preco: "5,00",
      },
      {
        id: Math.floor(Date.now() * Math.random()).toString(36),
        imagem: "https://static.netshoes.com.br/produtos/jaqueta-capuz-essentials-insulated-adidas/60/NQQ-7493-060/NQQ-7493-060_zoom1.jpg?ts=1618446340&",
        nome: "Produto Seis",
        preco: "588,00",
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
    }, () => console.log(this.state.ordem))
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
        
      },() => console.log(this.state.carrinho))
    }else{
      this.setState({
        carrinho:carrinhoCarregado 
      }, () => console.log(this.state.carrinho))
    } 
  };

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


    render() 
    let produtosCarregados = this.carregarProdutos() 
    let carrinhoProduto = this.carrinhoProduto()
    this.valorCarrinho()
    return (
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
          </div> */}
          {/* <div>
            <label>Buscar por Nome:</label>
            <input
              value={this.state.bucarPorNome}
              type="text"
              placeholder="Produtos"
              onChange={this.onChangeBucarPorNome}
            />
          </div>
          </div> */}
        </FilterArea>
        <AreaProdutos>
          <HeadProdutos>
            <p>
              Quantidade de produtos: <b>{produtosCarregados.length}</b>
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
    );
  }
}
export default App;
  