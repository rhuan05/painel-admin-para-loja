let editarBtn = document.querySelectorAll('.editarBtn');

editarBtn.forEach((e)=>{
    e.addEventListener('click', (e)=>{
        let btn = e.target;
        let btnParent = btn.parentNode;
        let parentAll = btnParent.parentNode;
        let parentChilds = parentAll.childNodes[3];
        parentChilds.style.visibility = 'visible';
    });
});

let fecharPut = document.querySelectorAll('.fecharPut');

fecharPut.forEach((e)=>{
    e.addEventListener('click', (e)=>{
        let btnFechar = e.target;
        let btnFecharParent = btnFechar.parentNode;
        btnFecharParent.style.visibility = 'hidden';
    });
});