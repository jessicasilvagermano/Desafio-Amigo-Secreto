// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nomeAmigo = inputAmigo.value.trim();

    // Validar se o campo está vazio
    if (nomeAmigo === '') {
        alert('Por favor, digite um nome válido.');
        return;
    }

    // Adicionar o nome à lista
    const listaAmigos = document.getElementById('listaAmigos');
    const novoItem = document.createElement('li');
    novoItem.textContent = nomeAmigo;
    listaAmigos.appendChild(novoItem);

    // Limpar o campo de entrada
    inputAmigo.value = '';
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    const listaAmigos = document.getElementById('listaAmigos').children;

    // Verificar se há nomes na lista
    if (listaAmigos.length === 0) {
        alert('Adicione pelo menos um amigo para sortear.');
        return;
    }

    // Sortear um nome aleatório
    const indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
    const amigoSorteado = listaAmigos[indiceSorteado].textContent;

    // Exibir o resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>Amigo secreto: ${amigoSorteado}</li>`;
}

// Adicionar eventos aos botões
document.addEventListener('DOMContentLoaded', () => {
    const botaoAdicionar = document.querySelector('.button-add');
    const botaoSortear = document.querySelector('.button-draw');

    botaoAdicionar.addEventListener('click', adicionarAmigo);
    botaoSortear.addEventListener('click', sortearAmigo);
});