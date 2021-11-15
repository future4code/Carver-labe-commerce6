import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Carrinho from "./Components/Carrinho/Carrinho";
import Inputs from "./Components/Inputs/Inputs";
import Produtos from "./Components/Produtos/Produtos";

const Body = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    
  }
`;
const Header = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-image: url("https://img.freepik.com/fotos-gratis/estrelas-e-galaxia-espaco-ceu-noite-universo-preto-fundo-estrelado-de-starfield-brilhante_146539-85.jpg?size=626&ext=jpg");

  div {
    display: flex;
    flex-direction: row;
    margin-right: 5%;
    cursor: pointer;
  }
`;

const ContadorCarrinho = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;

  position: absolute;
  right: 4.5%;
  top: 1.5%;
  color: white;
  background-color: red;
  font-size: 10px;
  
`;

const Logo = styled.img`
  width: 100px;
  margin-top: 73px;
`;

const Chart = styled.img`
  width: 30px;
  margin-right: 2%;
  margin-top: 2%;
`;
const FilterArea = styled.section`
  height: 60vh;
  width: 15%;
  padding: 1%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  h3 {
    margin-bottom: 10px;
  }
`;

const AreaCarrinho = styled.section`
  padding: 1%;
  height: 60vh;
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  h3 {
    margin-bottom: 10px;
    
  }
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
  }`
 
class App extends React.Component {
  state = {
    produtos: [
      {
        id: Math.floor(Date.now() * Math.random()).toString(36),
        imagem: "https://http2.mlstatic.com/D_NQ_NP_730905-MLB26316051067_112017-O.jpg",
        nome: "Calça Galáxia Masculina",
        preco: 139.99,
      },
      {
        id: Math.floor(Date.now() * Math.random()).toString(36),
        imagem: "http://pm1.narvii.com/6925/a78e10ff8f230a8444876c3b34cc1a25ac3cf551r1-600-600v2_uhq.jpg",
        nome: "Sabre de Luz Azul",
        preco: 299.99,
      },
      {
        id: Math.floor(Date.now() * Math.random()).toString(36),
        imagem: "https://sm.ign.com/t/ign_br/screenshot/default/the-child-star-wars-gallery-5e3204bdad395_95ku.620.jpg",
        nome: "Boneco Yoda ",
        preco: 150.99,
      },
      {
        id: Math.floor(Date.now() * Math.random()).toString(36),
        imagem: "https://www.veinerd.com/uploads/products/large/vaza-masc-1.jpg",
        nome: "Camiseta Vaza Unissex",
        preco: 69.99,
      },
      {
        id: Math.floor(Date.now() * Math.random()).toString(36),
        imagem: "https://cdn.shopify.com/s/files/1/0242/1302/8919/products/H8293c856fb344e10ad0c4539ee808d17K_ff7ebf90-819d-4cae-bc9f-9024665c7900.jpg?v=1614781195",
        nome: "Luminária Foguete",
        preco: 99.99,
      },
      {
        id: Math.floor(Date.now() * Math.random()).toString(36),
        imagem: "https://d3ugyf2ht6aenh.cloudfront.net/stores/934/649/products/caneca-vaza-nao-invada-meu-espaco1-ed8c100d39dc3381d316163693499900-1024-1024.jpg",
        nome: "Caneca Vaza",
        preco: 50.49,
      },
      {
        id: Math.floor(Date.now() * Math.random()).toString(36),
        imagem: "https://litb-cgis.rightinthebox.com/images/640x640/202109/bps/product/inc/ttueds1632474913681.jpg",
        nome: "Agasalho Galáxia",
        preco: 299.99,
      },
      {
        id: Math.floor(Date.now() * Math.random()).toString(36),
        imagem: "http://cdn.shopify.com/s/files/1/0019/1604/3327/products/meia-cano-alto-divertida-vaza-min_1200x1200.png?v=1606240902",
        nome: "Meia Vaza",
        preco: 49.99,
      },
      {
        id: Math.floor(Date.now() * Math.random()).toString(36),
        imagem: "https://img.elo7.com.br/product/main/39AE2F6/chaveiro-galaxia-andromeda-chaveirogalaxia.jpg",
        nome: "Chaveiro Galax",
        preco: 50.49,
      },    
    
    ],
    quantidadeProdutos: null,
    bucarPorNome: "",
    valorMinimo: null,
    valorMaximo: null,
    ordem: null,
    visibilidadeCarrinho: false,
    carrinho: [
      {
        quantidade: 1,
        produto: {
          id: 1,
          imagem: null ,
          nome: null,
          preco: null 
        }
      }
    ]
  };

  componentDidUpdate() {
    localStorage.setItem("carrinho", JSON.stringify(this.state.carrinho));
  }

  componentDidUpdate() {
    localStorage.setItem("carrinho", JSON.stringify(this.state.carrinho));
  }

  componentDidMount() {
    let carrinhoPersistido = localStorage.getItem("carrinho");
    carrinhoPersistido = JSON.parse(carrinhoPersistido);
    this.setState({
      carrinho: carrinhoPersistido || [],
    });
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

  filtrarProdutos = () => {
    let produtos = this.state.produtos;
    let maiorValor = parseFloat(this.state.valorMaximo) || 1000000;
    let menorValor = parseFloat(this.state.valorMinimo) || 0;
    let nomeProduto = this.state.bucarPorNome;

    if (nomeProduto === null) {
      produtos = produtos.filter((produto) => {
        return (
          parseFloat(produto.preco) < maiorValor &&
          parseFloat(produto.preco) > menorValor
        );
      });
    } else {
      produtos = produtos.filter((produto) => {
        return (
          parseFloat(produto.preco) < maiorValor &&
          parseFloat(produto.preco) > menorValor &&
          produto.nome.includes(nomeProduto)
        );
      });
    }

    return produtos;
  };

  onChangeOrdem = (e) => {
    this.setState({
      ordem: e.target.value,
    });
  };

  carregarProdutos = () => {
    let produtos = this.filtrarProdutos();
    if (produtos.length == 0) {
      return (
        <>
          <p>Produto Não Encontrado</p>
        </>
      );
    }

    //coloca os produtos de acordo com a ordem
    if (this.state.ordem != null) {
      if (this.state.ordem == "Crescente") {
        produtos = produtos.sort((a, b) => {
          return parseFloat(a.preco) - parseFloat(b.preco);
        });
      } else {
        produtos = produtos.sort((a, b) => {
          return -(parseFloat(a.preco) - parseFloat(b.preco));
        });
      }
    }
    return produtos;
  };

  adicionaCarrinho = (e) => {
    let produtoSelecionado = this.state.produtos.filter((produto) => {
      return produto.id == e.target.value;
    });
    let controle = 0;
    let carrinhoCarregado = this.state.carrinho.map((itemCarrinho) => {
      if (itemCarrinho.produto.id == e.target.value) {
        itemCarrinho.quantidade++;
        controle++;
      }
      return itemCarrinho;
    });

    if (controle == 0) {
      this.setState({
        carrinho: [
          ...this.state.carrinho,
          {
            quantidade: 1,
            produto: produtoSelecionado[0],
          },
        ],
      });
    } else {
      this.setState({
        carrinho: carrinhoCarregado,
      });
    }
  };

  carrinhoProduto = () => {
    return this.state.carrinho.map((carrinho) => {
      return (
        <Carrinho produto={carrinho} funcao={this.removerProdutoCarrinho} />
      );
    });
  };

  removerProdutoCarrinho = (id) => {
    let controle = 0;
    let produtosCarrinho = this.state.carrinho.map((item) => {
      if (item.produto.id == id && item.quantidade > 1) {
        controle++;
        item.quantidade--;
      }

      return item;
    });

    if (controle == 0) {
      let carrinho = this.state.carrinho.filter((item) => {
        return item.produto.id != id;
      });
      this.setState({
        carrinho: [...carrinho],
      });
    } else {
      this.setState({
        carrinho: produtosCarrinho,
      });
    }
  };

  valorCarrinho = () => {
    let valorTotal = 0;
    this.state.carrinho.map((item) => {
      valorTotal =
        parseFloat(item.produto.preco) * parseFloat(item.quantidade) +
        valorTotal;
    });
    return valorTotal;
  };

  mostrarCarrinho = () => {
    this.setState({
      visibilidadeCarrinho: !this.state.visibilidadeCarrinho,
    });
  };

  render() {
    let carrinhoProduto = this.carrinhoProduto();
    let contadorIcone
    if(this.state.carrinho.length != 0){
      contadorIcone = <ContadorCarrinho>{this.state.carrinho.length}</ContadorCarrinho>
    }else{
      contadorIcone = <></>
    }

    let carrinhoVisivel = this.state.visibilidadeCarrinho ? (
      <AreaCarrinho>
        <h3>Carrinho:</h3>
        {carrinhoProduto}

        <p>
          Valor total: <b>R$: {this.valorCarrinho()}</b>
        </p>
      </AreaCarrinho>
    ) : (
      <></>
    );
    return (
      <>
        <EstiloGlobal />
        <Header>
          <Logo src="https://moldura-pop.s3.sa-east-1.amazonaws.com/imagens-proprietarias/12702-m48n1CxR2s1S35WBjyaJmCaL9Q3OpI1w-cropped-3x4-browser.png" />
          <div onClick={this.mostrarCarrinho}>
            <Chart src="https://cdn-icons-png.flaticon.com/512/807/807911.png" />
            {contadorIcone}
          </div>
        </Header>
        <Body>
          <FilterArea>
            <h3>Filtros</h3>
            <Inputs
              place="Valor Mínimo:"
              valor={this.state.valorMinimo}
              tipo="number"
              funcao={this.onChangeValorMinimo}
            />
            <Inputs
              place="Valor Máximo:"
              valor={this.state.valorMaximo}
              tipo="number"
              funcao={this.onChangeValorMaximo}
            />
            <Inputs
              valor={this.state.bucarPorNome}
              tipo="text"
              funcao={this.onChangeBucarPorNome}
              place ="Calça, Camiseta"
            />
          </FilterArea>
          <Produtos
            produtos={this.carregarProdutos()}
            funcaoOrdem={this.onChangeOrdem}
            funcaoAdcionarCarrinho={this.adicionaCarrinho}
          />
          {carrinhoVisivel}
        </Body>
      </>
    );
  }
}

export default App;
