/* Tem que ser feito com html, css e js
- não é obrigatório utilizar bootstrap
- não é obrigatório ter slider
- código precisa estar comentado para que seja fácil de entender
- mínimo de 15 produtos
- todo produto deve ter NOME, PREÇO e FOTO
  {
    "id": 1,
    "nome": "Maçã",
    "preço": "2.30",
    "foto": URL ou o caminho do arquivo no seu projeto
  }
- precisa estar conectado com a API
- precisa funcionar dinamicamente adicionando produtos na tela caso eu adicione produtos no json
  - Exemplo: Os produtos devem ser criados na tela de acordo com os produtos que vem da API
             Quando eu criar um novo produto no json, quando eu recarregar a página, ele deve aparecer na lista
             Para fazer isso, utilizar appendChild() e innerHTML para adicionar HTML via JS
- quem quiser fazer o carrinho aparecer numa janela em cima do site, utilizar Modal
  - Dica: https://getbootstrap.com/docs/4.5/components/modal/
- exemplo do json do carrinho (não precisa ser necessariamente assim)
  {
    "id": 1,
    "nome": "Maçã",
    "preço": "2.30",
    "quantidade": 10,
    "foto": URL ou o caminho do arquivo no seu projeto (OU pegar direto do produto)
  }
- pode consultar o http://codepen.io
- precisa estar no github e estar com commits por partes (não um só commit com o projeto pronto)
1. Quero acessar uma página onde consigo escolher produtos para fazer a minha compra
  - Lista de produtos com NOME, PREÇO e FOTO
2. Quero poder escolher a quantidade do produto e adicioná-lo ao carrinho
  - Tem que ter um input onde o usuário digita um número e adiciona aquela quantidade ao carrinho
    Verificar se o usuário REALMENTE preencheu uma quantidade para adicionar o produto ao carrinho
3. Quero poder visualizar o meu carrinho e os produtos dentro dele
  - Pode ser uma página com os produtos no carrinho,
    onde tem uma lista com NOME, FOTO, TOTAL (preço * quantidade)
COLOQUE UM SORRISO NO ROSTO DO PEDRO:
4. Quero poder remover o produto do carrinho (NÃO OBRIGATÓRIO, MAS VOU O PEDRO FICA FELIZ SE FIZER)
  - Na mesma lista de produtos do carrinho, ter uma opção de excluir o produto do carrinho
O que estamos avaliando nisso:
- Axios / Promise
- Classes
- DOM
- HTML, JS, CSS
Quantas pessoas?
- 3 pessoas (quem quiser, fique a vontade para fazer sozinho, em 2 pessoas) entrega 1 site só
Qual é o prazo?
Quinta-feira (20/08) 20:30
Apresentação
Quinta-feira (20/08) 20:30 */

// const { url } = require("inspector")
const url = 'http://localhost:3000/produtos'

let carrinho = [];

class ProdutoNoCarrinho {
  constructor(nome, preco, quantidade) {
    this.nome = nome
    this.preco = preco
    this.quantidade = quantidade
  }
}

function colocarProdutoNoCarrinho(nomeProduto, valorDoProduto, quantidadeDoProduto) {
  if (quantidadeDoProduto !== "") {
    let produtoNoCarrinho = new ProdutoNoCarrinho(nomeProduto, valorDoProduto, quantidadeDoProduto)
    carrinho.push(produtoNoCarrinho)

    console.log("Você adicionou  " + produtoNoCarrinho.quantidade + " " + produtoNoCarrinho.nome + "(s) no carrinho!")

    calcularValorTotalDoCarrinho()
  } else {
    alert("É necessario selecionar uma quantidade do produto.")
  }
}

function calcularValorTotalDoCarrinho() {
  let soma = 0

  for (let i = 0; i < carrinho.length; i++) {
    let produtoNoEspacoAtualNoCarrinho = carrinho[i]
    // a gente só tá calculando o preço X quantidade daquele produto no carrinho
    let valorTotalDoProdutoAtual = produtoNoEspacoAtualNoCarrinho.preco * produtoNoEspacoAtualNoCarrinho.quantidade

    soma = soma + valorTotalDoProdutoAtual
  }

  console.log("O valor total do carrinho é de R$ " + soma)
  // let inputOndeFicaValorTotalDoCarrinho = document.getElementById("valorTotalDoCarrinho")
  

  // inputOndeFicaValorTotalDoCarrinho.value = soma
  // toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }); serve pra formatar o número em dinheiro
  // x.innerHTML = soma.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
}

function clicarComprarProduto(idDoCampoPreco, idDoCampoQuantidade, nomeDoProduto) {
  let inputComPreco = document.getElementById(idDoCampoPreco)
  let valorDoProduto = inputComPreco.innerText // onde fica que a maçã custa R$ 2,30
  let quantidadeDoProduto = document.getElementById(idDoCampoQuantidade).value// aqui é onde o usuário diz quantas quer
  let inputComNome = document.getElementById(nomeDoProduto).innerText
  
  console.log(quantidadeDoProduto)

  colocarProdutoNoCarrinho(inputComNome, valorDoProduto, quantidadeDoProduto)
}

// espero a página carregar
// window é o BOM
// onload é o evento onde a página
window.onload = function () {
  axios.get(url)
    .then(response => {
        produtos = response.data
        for (let i = 0; i < produtos.length; i++) {
          const produto = produtos[i];
          
        }
       
    })
      // for (let i = 0; i < produtos.length; i++) { //Não consegui fazer essa parte Pedro
      //   const divDosProdutos = document.createElement("div")
        

      //   divDosProdutos.innerHTML = `  
        
      //   <div class="imagem-cartao">
      //     <img src="${produtos.url}" width="250px">


      //   </div>
      //   <div> 
      //     <div class="conteudo-cartao">
      //       <p id="${nomeDoProduto}" type="text">${produtos.nome}</p>
      //       <p>PREÇO:</p>
      //       <p id="${idDoCampoPreco}">${produtos.preço}</p>
           
      //     </div>
      //     <div>
      //       <button id="" class="botao-comprar">COMPRAR</button>
      //       <input id="${idDoCampoQuantidade}" class='input-comprar' type="number">
      //     </div>
      //   </div>
        
        
      //   `
        
      // }
    





  // document.getElementById recupera um elemento que tem o nome "botao"
  // document.getElementById("").addEventListener("click", () => {
  //   // let idDoCampoPreco = "precoMaca"
  //   // let idDoCampoQuantidade = "quantidadeMaca"
  //   // let nomeDoProduto = "Maca"
  //   clicarComprarProduto("precoMaca", "quantidadeMaca", "Maçã")
  // })

  document.getElementById("comprarUva").addEventListener("click", () => {
    let idDoCampoPreco = "precoUva"
    let idDoCampoQuantidade = "quantidadeUva"
    let nomeDoProduto = "nomeUva"

    clicarComprarProduto(idDoCampoPreco, idDoCampoQuantidade, nomeDoProduto)
  })

  document.getElementById("comprarLaranja").addEventListener("click", () => {
    let idDoCampoPreco = "precoLaranja"
    let idDoCampoQuantidade = "quantidadeLaranja"
    let nomeDoProduto = "nomeLaranja"

    clicarComprarProduto(idDoCampoPreco, idDoCampoQuantidade, nomeDoProduto)
  })

  document.getElementById("comprarMaca").addEventListener("click", () => {
    let idDoCampoPreco = "precoMaca"
    let idDoCampoQuantidade = "quantidadeMaca"
    let nomeDoProduto = "nomeMaca"

    clicarComprarProduto(idDoCampoPreco, idDoCampoQuantidade, nomeDoProduto)
  })
  document.getElementById("comprarBanana").addEventListener("click", () => {
    let idDoCampoPreco = "precoBanana"
    let idDoCampoQuantidade = "quantidadeBanana"
    let nomeDoProduto = "nomeBanana"

    clicarComprarProduto(idDoCampoPreco, idDoCampoQuantidade, nomeDoProduto)
  })

  document.getElementById("comprarKiwi").addEventListener("click", () => {
    let idDoCampoPreco = "precoKiwi"
    let idDoCampoQuantidade = "quantidadeKiwi"
    let nomeDoProduto = "nomeKiwi"

    clicarComprarProduto(idDoCampoPreco, idDoCampoQuantidade, nomeDoProduto)
  })
  document.getElementById("comprarMelancia").addEventListener("click", () => {
    let idDoCampoPreco = "precoMelancia"
    let idDoCampoQuantidade = "quantidadeMelancia"
    let nomeDoProduto = "nomeMelancia"

    clicarComprarProduto(idDoCampoPreco, idDoCampoQuantidade, nomeDoProduto)
  })
  document.getElementById("comprarMelao").addEventListener("click", () => {
    let idDoCampoPreco = "precoMelao"
    let idDoCampoQuantidade = "quantidadeMelao"
    let nomeDoProduto = "nomeMelao"

    clicarComprarProduto(idDoCampoPreco, idDoCampoQuantidade, nomeDoProduto)
  })
  document.getElementById("comprarPessego").addEventListener("click", () => {
    let idDoCampoPreco = "precoPessego"
    let idDoCampoQuantidade = "quantidadePessego"
    let nomeDoProduto = "nomePessego"

    clicarComprarProduto(idDoCampoPreco, idDoCampoQuantidade, nomeDoProduto)
  })
  document.getElementById("comprarAmeixa").addEventListener("click", () => {
    let idDoCampoPreco = "precoAmeixa"
    let idDoCampoQuantidade = "quantidadeAmeixa"
    let nomeDoProduto = "nomeAmeixa"

    clicarComprarProduto(idDoCampoPreco, idDoCampoQuantidade, nomeDoProduto)
  })
  document.getElementById("comprarCaju").addEventListener("click", () => {
    let idDoCampoPreco = "precoCaju"
    let idDoCampoQuantidade = "quantidadeCaju"
    let nomeDoProduto = "nomeCaju"

    clicarComprarProduto(idDoCampoPreco, idDoCampoQuantidade, nomeDoProduto)
  })
  document.getElementById("comprarCoco").addEventListener("click", () => {
    let idDoCampoPreco = "precoCoco"
    let idDoCampoQuantidade = "quantidadeCoco"
    let nomeDoProduto = "nomeCoco"

    clicarComprarProduto(idDoCampoPreco, idDoCampoQuantidade, nomeDoProduto)
  })
  document.getElementById("comprarDamasco").addEventListener("click", () => {
    let idDoCampoPreco = "precoDamasco"
    let idDoCampoQuantidade = "quantidadeDamasco"
    let nomeDoProduto = "nomeDamasco"

    clicarComprarProduto(idDoCampoPreco, idDoCampoQuantidade, nomeDoProduto)
    
  })
  document.getElementById("comprarJaca").addEventListener("click", () => {
    let idDoCampoPreco = "precoJaca"
    let idDoCampoQuantidade = "quantidadeJaca"
    let nomeDoProduto = "nomeJaca"

    clicarComprarProduto(idDoCampoPreco, idDoCampoQuantidade, nomeDoProduto)
    
  })
  document.getElementById("comprarLichia").addEventListener("click", () => {
    let idDoCampoPreco = "precoLichia"
    let idDoCampoQuantidade = "quantidadeLichia"
    let nomeDoProduto = "nomeLichia"

    clicarComprarProduto(idDoCampoPreco, idDoCampoQuantidade, nomeDoProduto)
    
  })
  document.getElementById("comprarLimao").addEventListener("click", () => {
    let idDoCampoPreco = "precoLimao"
    let idDoCampoQuantidade = "quantidadeLimao"
    let nomeDoProduto = "nomeLimao"

    clicarComprarProduto(idDoCampoPreco, idDoCampoQuantidade, nomeDoProduto)
    
  })
  document.getElementById("comprarManga").addEventListener("click", () => {
    let idDoCampoPreco = "precoManga"
    let idDoCampoQuantidade = "quantidadeManga"
    let nomeDoProduto = "nomeManga"

    clicarComprarProduto(idDoCampoPreco, idDoCampoQuantidade, nomeDoProduto)
    
  })

}

