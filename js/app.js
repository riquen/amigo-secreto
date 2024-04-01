let listaAmigos = document.getElementById('lista-amigos');
let listaSorteada = document.getElementById('lista-sorteio');
let listaSorteio = [];

function adicionar() {
    let nomeAmigo = document.getElementById('nome-amigo');

    if (!nomeAmigo.value) {
        alert('Informe o nome do amigo!');
        return;
    }

    if (listaSorteio.includes(nomeAmigo.value)) {
        alert('Nome já adicionado!');
        return;
    }

    if (!listaAmigos.textContent) {
        listaAmigos.textContent = nomeAmigo.value;
    } else {
        listaAmigos.textContent += `, ${nomeAmigo.value}`;
    }

    listaSorteio.push(nomeAmigo.value);

    nomeAmigo.value = '';
}

function sortear() {    
    if (listaSorteio.length < 4) {
        alert('Adicione pelo menos 4 amigos!');
        return;
    }

    embaralhar(listaSorteio);

    for (let i = 0; i < listaSorteio.length; i++) {
        if (i == listaSorteio.length - 1) {
            listaSorteada.innerHTML += `${listaSorteio[i]} --> ${listaSorteio[0]} <br />`;
        } else {
            listaSorteada.innerHTML += `${listaSorteio[i]} --> ${listaSorteio[i + 1]} <br />`;
        }
    }
}

function embaralhar(lista) {
    return lista.sort(() => Math.random() - 0.5);
}

function reiniciar() {
    listaSorteio = [];
    listaAmigos.innerHTML = '';
    listaSorteada.innerHTML = '';
}