// function adicionaItem(event){

//     let novoItem = document.createElement("article")
//     let tela = document.getElementById("container")

//     novoItem=document.createTextNode("Oi, fui adicionado.")
//     console.log(novoItem)

//     tela.appendChild(novoItem)
//     console.log(tela)
   
// }

function adicionaItem(event){

    let elementoNovo = document.createElement("article")
    elementoNovo.classList.add("item")
    elementoNovo.onclick - removeItem;
    let referencia = document.getElementById("container")
    referencia.insertAdjacentElement("beforeend",elementoNovo)
   
}



function removeItem(event){
    event.target.remove()
}

