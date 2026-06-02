// Seleciona o botão e o texto de mensagem do HTML
const botao = document.getElementById('meuBotao');
const mensagem = document.getElementById('mensagem');

// Adiciona um evento que "escuta" quando o botão é clicado
botao.addEventListener('click', function() {
    // Quando clicado, ele muda o estilo da mensagem para aparecer na tela
    if (mensagem.style.display === 'block') {
        mensagem.style.display = 'none'; // Esconde se já estiver aparecendo
    } else {
        mensagem.style.display = 'block'; // Mostra a mensagem
    }
});
