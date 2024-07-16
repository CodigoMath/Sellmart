document.getElementById('btnCategorias').addEventListener('click', function() {
    const categoryList = document.getElementById('categorias');
    if (categoryList.classList.contains('hidden')) {
        categoryList.classList.remove('hidden');
        this.innerHTML = '<img src="/img/hamburguer-branco-icon.svg"> Todas as categorias';
        this.classList.add('selected'); // Adiciona a classe selecionada
    } else {
        categoryList.classList.add('hidden');
        this.innerHTML = '<img src="/img/hamburguer-icon.svg"> Todas as categorias';
        this.classList.remove('selected'); // Remove a classe selecionada
    }
});
