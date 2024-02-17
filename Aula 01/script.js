// Esperar o documento ser completamente carregado, antes de executar o código//

document.addEventListener
("DOMContentLoaded",function()
{
    // selecionar o botao e o paragrafo pelo id//

    const button = document.querySelector("button")
    const theme_status = document.getElementById("theme_status")
    // Define a função que será chamada quando o botão for clicado
    button.onclick = function()
    {
        //verifica se o elemento body tem a classe night_theme
        if(document.body.classList.contains("night_theme"))
        {
            document.body.classList.remove("night_theme")
            //tira o tema escuro
            theme_status.textContent= "Modo: Claro"
            //altera o texto para modo claro
        }
        else
        {

            document.body.classList.add("night_theme")
            theme_status.textContent= "Modo: Escuro"
            //Adiciona o texto e o fundo do modo escuro
        }
    }
}
)
