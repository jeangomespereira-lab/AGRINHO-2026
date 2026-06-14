// =====================================
// ACESSIBILIDADE
// =====================================

const botaoAcessibilidade =
document.getElementById("botaoAcessibilidade");

const menuAcessibilidade =
document.getElementById("menuAcessibilidade");

const btnAumentar =
document.getElementById("aumentarFonte");

const btnDiminuir =
document.getElementById("diminuirFonte");

const btnContraste =
document.getElementById("altoContraste");

let tamanhoFonte = 16;

// abrir menu

botaoAcessibilidade.addEventListener("click", () => {
    menuAcessibilidade.classList.toggle("aberto");
});

// aumentar fonte

btnAumentar.addEventListener("click", () => {

    if(tamanhoFonte < 24){

        tamanhoFonte += 2;

        document.body.style.fontSize =
        tamanhoFonte + "px";
    }

});

// diminuir fonte

btnDiminuir.addEventListener("click", () => {

    if(tamanhoFonte > 12){

        tamanhoFonte -= 2;

        document.body.style.fontSize =
        tamanhoFonte + "px";
    }

});

// alto contraste

btnContraste.addEventListener("click", () => {

    document.body.classList.toggle("alto-contraste");

});

// =====================================
// CONTADORES ANIMADOS
// =====================================

const contadores =
document.querySelectorAll(".contador");

contadores.forEach(contador => {

    const atualizar = () => {

        const alvo =
        +contador.getAttribute("data-target");

        const atual =
        +contador.innerText;

        const incremento =
        alvo / 100;

        if(atual < alvo){

            contador.innerText =
            Math.ceil(atual + incremento);

            setTimeout(atualizar,20);

        }else{

            contador.innerText = alvo;

        }

    };

    atualizar();

});

// =====================================
// ANIMAÇÃO AO ROLAR
// =====================================

const elementosFade =
document.querySelectorAll(".fade");

function revelarElementos(){

    const alturaTela =
    window.innerHeight;

    elementosFade.forEach(elemento => {

        const topo =
        elemento.getBoundingClientRect().top;

        if(topo < alturaTela - 100){

            elemento.classList.add("aparecer");

        }

    });

}

window.addEventListener(
"scroll",
revelarElementos
);

revelarElementos();

// =====================================
// BOTÃO VOLTAR AO TOPO
// =====================================

const voltarTopo =
document.getElementById("voltarTopo");

window.addEventListener("scroll", () => {

    if(window.scrollY > 500){

        voltarTopo.style.display =
        "block";

    }else{

        voltarTopo.style.display =
        "none";

    }

});

voltarTopo.addEventListener("click", () => {

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});

// =====================================
// CALCULADORA DE ECONOMIA
// =====================================

const btnCalcular =
document.getElementById(
"calcularEconomia"
);

const resultadoEconomia =
document.getElementById(
"resultadoEconomia"
);

btnCalcular.addEventListener("click", () => {

    const litros =
    Number(
    document.getElementById("litros").value
    );

    if(litros <= 0){

        resultadoEconomia.innerHTML =
        "Digite um valor válido.";

        return;
    }

    const economia =
    litros * 0.60;

    resultadoEconomia.innerHTML =

    `💧 Utilizando irrigação por gotejamento,
    você poderia economizar aproximadamente
    <strong>${economia.toFixed(0)} litros</strong>
    de água.`;

});

// =====================================
// QUIZ
// =====================================

const progresso =
document.getElementById("progresso");

const formularioQuiz =
document.getElementById(
"formularioQuiz"
);

if(formularioQuiz){

    const radios =
    formularioQuiz.querySelectorAll(
    "input[type='radio']"
    );

    radios.forEach(radio => {

        radio.addEventListener(
        "change",
        atualizarProgresso
        );

    });

}

function atualizarProgresso(){

    const respondidas =
    document.querySelectorAll(
    "input[type='radio']:checked"
    ).length;

    const total = 5;

    const porcentagem =
    (respondidas / total) * 100;

    progresso.style.width =
    porcentagem + "%";

}

// =====================================
// CORREÇÃO DO QUIZ
// =====================================

const btnCorrigir =
document.getElementById(
"btnCorrigirQuiz"
);

const resultadoQuiz =
document.getElementById(
"resultadoQuiz"
);

const gabarito = {

    q1:"c",
    q2:"b",
    q3:"c",
    q4:"b",
    q5:"c"

};

if(btnCorrigir){

    btnCorrigir.addEventListener(
    "click",
    corrigirQuiz
    );

}

function corrigirQuiz(){

    let pontos = 0;

    for(let questao in gabarito){

        const resposta =
        document.querySelector(
        `input[name="${questao}"]:checked`
        );

        if(
            resposta &&
            resposta.value ===
            gabarito[questao]
        ){

            pontos++;

        }

    }

    if(pontos === 5){

        resultadoQuiz.innerHTML =

        `
        🥇 <strong>Mestre da Sustentabilidade</strong><br>
        Você acertou ${pontos}/5 questões!
        `;

    }

    else if(pontos >= 3){

        resultadoQuiz.innerHTML =

        `
        🥈 <strong>Guardião da Água</strong><br>
        Você acertou ${pontos}/5 questões!
        `;

    }

    else{

        resultadoQuiz.innerHTML =

        `
        🥉 <strong>Aprendiz da Sustentabilidade</strong><br>
        Você acertou ${pontos}/5 questões!
        `;

    }

}

// =====================================
// FECHAR MENU AO CLICAR FORA
// =====================================

document.addEventListener("click", (e) => {

    if(
        !botaoAcessibilidade.contains(e.target)
        &&
        !menuAcessibilidade.contains(e.target)
    ){

        menuAcessibilidade.classList.remove(
        "aberto"
        );

    }

});

console.log(
"🌱 AgroWater carregado com sucesso!"
);
  
