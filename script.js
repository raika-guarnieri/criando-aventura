function escolha(opcao) {
    const descricao = document.getElementById('descricao');
    const resultado = document.getElementById('resultado');

    if (opcao === 'explorar') {
        descricao.innerHTML = "Você decide explorar a floresta. Você encontra um caminho à esquerda e outro à direita.";
        resultado.innerHTML = `
            <button onclick="caminho('esquerda')">Ir para a esquerda</button>
            <button onclick="caminho('direita')">Ir para a direita</button>
        `;
    } else if (opcao === 'acampamento') {
        descricao.innerHTML = "Você decide ir para o acampamento. O que você quer fazer lá?";
        resultado.innerHTML = `
            <button onclick="acampamento('fogo')">Fazer uma fogueira</button>
            <button onclick="acampamento('descansar')">Descansar</button>
        `;
    }
}

function caminho(direcao) {
    const descricao = document.getElementById('descricao');
    const resultado = document.getElementById('resultado');

    if (direcao === 'esquerda') {
        descricao.innerHTML = "Você encontra um lago cristalino. Você pode nadar ou descansar à beira do lago.";
        resultado.innerHTML = `
            <button onclick="lago('nadar')">Nadar</button>
            <button onclick="lago('descansar')">Descansar</button>
        `;
    } else if (direcao === 'direita') {
        descricao.innerHTML = "Você encontra um grupo de animais. O que você quer fazer?";
        resultado.innerHTML = `
            <button onclick="animais('observar')">Observar os animais</button>
            <button onclick="animais('aproximar')">Aproximar-se dos animais</button>
        `;
    }
}

function acampamento(acao) {
    const descricao = document.getElementById('descricao');
    const resultado = document.getElementById('resultado');

    if (acao === 'fogo') {
        descricao.innerHTML = "Você fez uma fogueira e pode cozinhar algo ou ficar aquecido.";
        resultado.innerHTML = `
            <button onclick="fogo('cozinhar')">Cozinhar algo</button>
            <button onclick="fogo('ficar')">Ficar aquecido</button>
        `;
    } else if (acao === 'descansar') {
        descricao.innerHTML = "Você descansa e se sente revigorado. O que você quer fazer em seguida?";
        resultado.innerHTML = `
            <button onclick="escolha('explorar')">Explorar novamente</button>
            <button onclick="escolha('acampamento')">Fazer algo no acampamento</button>
        `;
    }
}

function lago(acao) {
    const descricao = document.getElementById('descricao');
    const resultado = document.getElementById('resultado');

    if (acao === 'nadar') {
        descricao.innerHTML = "Você nada no lago e encontra uma pedra preciosa submersa!";
        resultado.innerHTML = "<p>Você ganhou uma pedra preciosa! A aventura continua.</p>";
    } else if (acao === 'descansar') {
        descricao.innerHTML = "Você descansa à beira do lago e aprecia a beleza da natureza.";
        resultado.innerHTML = "<p>Você se sente em paz.</p>";
    }
}

function animais(acao) {
    const descricao = document.getElementById('descricao');
    const resultado = document.getElementById('resultado');

    if (acao === 'observar') {
        descricao.innerHTML = "Você observa os animais de longe e nota que eles não têm medo de você.";
        resultado.innerHTML = "<p>Você se sente conectado à natureza.</p>";
    } else if (acao === 'aproximar') {
        descricao.innerHTML = "Os animais ficam assustados e fogem. Você perdeu a chance de interagir.";
        resultado.innerHTML = "<p>Tente novamente!</p>";
    }
}

function fogo(acao) {
    const descricao = document.getElementById('descricao');
    const resultado = document.getElementById('resultado');

    if (acao === 'cozinhar') {
        descricao.innerHTML = "Você cozinha um prato delicioso e se sente satisfeito.";
        resultado.innerHTML = "<p>Um verdadeiro banquete!</p>";
    } else if (acao === 'ficar') {
        descricao.innerHTML = "Você se aquece e ouve sons da floresta à noite.";
        resultado.innerHTML = "<p>Um momento tranquilo.</p>";
    }
}
