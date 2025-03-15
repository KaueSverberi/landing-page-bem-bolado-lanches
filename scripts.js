document.getElementById('select-cardapio').addEventListener('change', function() {
    const selectedValue = this.value;
    
    // Esconde todas as listas
    document.getElementById('lanches').style.display = 'none';
    document.getElementById('porcao').style.display = 'none';
    document.getElementById('acai').style.display = 'none';
    document.getElementById('bebidas').style.display = 'none';
    
    // Exibe a lista correspondente à opção selecionada
    document.getElementById(selectedValue).style.display = 'grid';
});

// Exibe a lista inicial (opção padrão) ao carregar a página
document.getElementById('select-cardapio').dispatchEvent(new Event('change'));
