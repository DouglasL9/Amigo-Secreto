//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let nomeAmigoSecreto = [];

function adicionarAmigo() {
    const input = document.getElementById('amigo');
        const nome = input.value.trim();

        if (nome === '') {
            alert('Digite um nome válido.');
            return;
        }
        else if (nomeAmigoSecreto.includes(nome)) {
            alert('Este nome já foi adicionado.');
            return;
        }

        nomeAmigoSecreto.push(nome);
        input.value = '';
        atualizarLista()
}

function atualizarLista() {
        const lista = document.getElementById('listaAmigos');
        lista.innerHTML = '';

        nomeAmigoSecreto.forEach(nome => {
            const li = document.createElement('li');
            li.textContent = nome;
            lista.appendChild(li);
        });
    }

function sortearAmigo() {
    if (nomeAmigoSecreto.length < 2) {
        alert('Adicione pelo menos 2 amigos para sortear.');
        return;
    }

    let gerarNumeroAleatorio = parseInt(Math.random() * nomeAmigoSecreto.length);

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '<h3>Resultado do Sorteio:</h3>';

    const sorteado = nomeAmigoSecreto[gerarNumeroAleatorio];
    resultado.innerHTML += `<p>${sorteado}</p>`;
    
}