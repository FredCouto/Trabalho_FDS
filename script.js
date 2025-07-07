const botao = document.querySelector('#botao');

botao.addEventListener('click', e => {
    document.querySelector('#saudacao').textContent = "Eu espero que você tenha um ótimo dia!";
});