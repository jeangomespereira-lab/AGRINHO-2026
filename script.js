// ===== FUNCIONALIDADES DE ACESSIBILIDADE =====

// Elementos do DOM
const botaoAcessibilidade = document.getElementById('botaoAcessibilidade');
const menuAcessibilidade = document.getElementById('menuAcessibilidade');
const btnAumentar = document.getElementById('aumentarFonte');
const btnDiminuir = document.getElementById('diminuirFonte');
const btnContraste = document.getElementById('altoContraste');

let tamanhoFonteAtual = 16; // tamanho base em px

// Abrir/fechar menu de acessibilidade
botaoAcessibilidade.addEventListener('click', () => {
    menuAcessibilidade.classList.toggle('aberto');
});

// Aumentar fonte (máximo 24px)
btnAumentar.addEventListener('click', () => {
    if (tamanhoFonteAtual < 24) {
        tamanhoFonteAtual += 2;
        document.body.style.fontSize = tamanhoFonteAtual + 'px';
    }
});

// Diminuir fonte (mínimo 12px)
btnDiminuir.addEventListener('click', () => {
    if (tamanhoFonteAtual > 12) {
        tamanhoFonteAtual -= 2;
        document.body.style.fontSize = tamanhoFonteAtual + 'px';
    }
});

// Alto contraste
btnContraste.addEventListener('click', () => {
    document.body.classList.toggle('alto-contraste');
});

// Fechar menu se clicar fora (opcional)
document.addEventListener('click', (event) => {
    if (!botaoAcessibilidade.contains(event.target) && !menuAcessibilidade.contains(event.target)) {
        menuAcessibilidade.classList.remove('aberto');
    }
});

// ===== FUNCIONALIDADE PRINCIPAL: QUIZ SUSTENTÁVEL =====

const btnCorrigir = document.getElementById('btnCorrigirQuiz');
const resultadoDiv = document.getElementById('resultadoQuiz');

// Gabarito do quiz (questões 1 a 5)
const gabarito = {
    q1: 'c',  // 70%
    q2: 'b',  // irrigação por gotejamento
    q3: 'c',  // sistemas de irrigação ineficientes
    q4: 'b',  // monitorar umidade do solo
    q5: 'c'   // preservar rios, nascentes e garantir futuro sustentável
};

// Função para corrigir o quiz
function corrigirQuiz() {
    let pontuacao = 0;
    let respostasUsuario = {
        q1: document.querySelector('input[name="q1"]:checked'),
        q2: document.querySelector('input[name="q2"]:checked'),
        q3: document.querySelector('input[name="q3"]:checked'),
        q4: document.querySelector('input[name="q4"]:checked'),
        q5: document.querySelector('input[name="q5"]:checked')
    };

    // Verifica cada questão
    for (let questao in gabarito) {
        if (respostasUsuario[questao]) {
            if (respostasUsuario[questao].value === gabarito[questao]) {
                pontuacao++;
            }
        }
    }

    // Exibe o resultado
    if (pontuacao === 5) {
        resultadoDiv.innerHTML = `🎉 Excelente! Você acertou ${pontuacao} de 5 questões. Parabéns! Você aprendeu sobre o uso sustentável da água. 🌱💧`;
        resultadoDiv.style.backgroundColor = '#C8E6C9';
    } else if (pontuacao >= 3) {
        resultadoDiv.innerHTML = `📘 Bom trabalho! Você acertou ${pontuacao} de 5 questões. Releia as dicas e tente novamente para gabaritar! 🌍`;
        resultadoDiv.style.backgroundColor = '#FFF9C4';
    } else {
        resultadoDiv.innerHTML = `🌿 Você acertou ${pontuacao} de 5 questões. Que tal revisar as soluções sustentáveis? A água é vida, vamos aprender juntos! 💙`;
        resultadoDiv.style.backgroundColor = '#FFCDD2';
    }
}

// Evento do botão corrigir quiz
btnCorrigir.addEventListener('click', corrigirQuiz);

// Mensagem de boas-vindas no console (para aprendizado)
console.log('Site AgroWater carregado! Quiz sobre sustentabilidade da água pronto ✅');
