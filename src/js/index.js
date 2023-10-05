const personagens = document.querySelectorAll('.personagem')

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
        const personagemSelecionado = document.querySelector('.selecionado')
        personagemSelecionado.classList.remove('.selecionado')
        console.log('personagemSelecionado')

        personagem.classList.add('selecionado')
    })
})