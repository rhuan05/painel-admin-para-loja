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

btnMostrarAlerta.forEach((e)=>{
    e.addEventListener('click', ()=>{
        let form = e.parentNode;
        let formChilds = form.childNodes[3];
        formChilds.style.display = 'block';
    });
});

let cancelarExcluir = document.querySelectorAll('.cancelarExcluir');

cancelarExcluir.forEach((e)=>{
    e.addEventListener('click', ()=>{
        let forDisplayNone = e.parentNode;
        forDisplayNone.style.display = 'none';
    });
});

// Editar produto

let tdIconEdit = document.querySelector('.tdIconEdit');

tdIconEdit.addEventListener('click', ()=>{
    document.querySelector('body').classList.toggle('mostrarModelEditarProduto');
});

let fecharEditarProduto = document.querySelector('.fecharEditarProduto');

fecharEditarProduto.addEventListener('click', ()=>{
    document.querySelector('body').classList = '';
});