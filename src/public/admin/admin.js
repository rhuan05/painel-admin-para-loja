let fileira = document.querySelector('.fileiras');
let produtos = document.querySelectorAll('.fileira--elemento');

fileira.style.width = `${produtos.length * 192}px`;

// Fileira

let btnNovaFileira = document.querySelector('.btnNovaFileira');

btnNovaFileira.addEventListener('click', ()=>{
    document.querySelector('body').classList.toggle('ativarModelFileira');
});

let fecharModeloFileira = document.querySelector('.fecharModeloFileira');

fecharModeloFileira.addEventListener('click', ()=>{
    document.querySelector('body').classList = '';
});

// Produto

let btnNovoProduto = document.querySelector('.btnNovoProduto');

btnNovoProduto.addEventListener('click', ()=>{
    document.querySelector('body').classList.toggle('ativarModelProduto');
});

let fecharModeloProduto = document.querySelector('.fecharModeloProduto');

fecharModeloProduto.addEventListener('click', ()=>{
    document.querySelector('body').classList = '';
});

// Excluir fileira

let btnMostrarAlerta = document.querySelectorAll('.btnMostrarAlerta');
console.log(btnMostrarAlerta);

btnMostrarAlerta.forEach((e)=>{
    e.addEventListener('click', ()=>{
        document.querySelector('body').classList.toggle('ativarConfirmacaoParaDeletar');
    });
});

let cancelarExcluir = document.querySelectorAll('.cancelarExcluir');

cancelarExcluir.forEach((e)=>{
    e.addEventListener('click', ()=>{
        document.querySelector('body').classList = '';
    });
});