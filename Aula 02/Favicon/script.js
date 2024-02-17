//Esperar o documento ser completamente carregado antes de executar o código
document.addEventListener("DOMContentLoaded", function(){
   
    // Selecionar o Botão e o parágrafo pelo ID
    const button = document.querySelector("button")
    const themeStatus = document.getElementById("themeStatus")
    
    //Define a função que será chamada quando o botão for clicado
    button.onclick = function(){

        //Verifica se o elemento body tem a classe "night-theme"
        if(document.body.classList.contains("night-theme")){
           
            //Se tiver, remove a classe e muda para o tema claro
            document.body.classList.remove("night-theme")
            
            //Atualiza o texto do parágrafo
            themeStatus.textContent = "Modo: Claro"
        } else {

            //Adiciona a classe e muda para o tema escuro
            document.body.classList.add("night-theme")
            
            //atualiza o texto do parágrafo para refletir o modo atual
            themeStatus.textContent = "Modo: Escuro"
        }
    }
})