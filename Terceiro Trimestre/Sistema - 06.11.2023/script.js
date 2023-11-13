let quantidadeProdutos = 0;

function adicionarAoCarrinho() {
  quantidadeProdutos++;
  atualizarContador();
}

function atualizarContador() {
  const contador = document.getElementById('contador');
  contador.textContent = quantidadeProdutos.toString();
}

function mostrarCarrinho() {

  alert('Carrinho de compras com ' + quantidadeProdutos + ' produto');
  function adicionarProduto() {

    var nome = document.getElementById('1').value;

    sessionStorage.setItem('produto_nome', 1);

    window.location.href = 'outra_pagina.html';
  }
}

function trocadePagina(){

 if(window.location.href = 'index.html'){
   window.location.href = 'novapágina.html';
}
else{
  window.location.href = 'index.html'
}
}
