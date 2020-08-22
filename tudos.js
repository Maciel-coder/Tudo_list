
//Refenrenciando  os elementos do HTML
var listElement = document.querySelector("#app1 .lista ul");
var inputElement = document.querySelector("#app1 input");
var btnElement = document.querySelector("#app1 button");

//Criando um Array para lista de itens
var tudos = JSON.parse(localStorage.getItem("list_tudos")) || [];

//Função pra rederizar os itens na tela
function rederTudos(){
  listElement.innerHTML =  ""; //limpa os itens sempre que há uma nova redenrização
  for(tudo of tudos){ //percorre o array de tudos
    var tudoElement = document.createElement("li"); // cria um elemente no HTML (nesse caso uma lista) e armazena navariavel tudoElment
    var tudoText = document.createTextNode(tudo); //cria e adiciona um texto para esse elemento

    tudoElement.appendChild(tudoText); // adiciona os textos na variavel tudoElement ()
    listElement.appendChild(tudoElement); //adiciona o tudoElement contendo o texto digitado na lista

    var linkElement = document.createElement("a");//cria um elemento HTML nesse caso um link
    linkElement.setAttribute("href", "#");
    var posicao = tudos.indexOf(tudo); //busca um item na lista passan a
    linkElement.setAttribute('onclick', 'deletTudo('+posicao+')'); //atribui a função onclick e chama a função delete pasando a posição
    var linkText = document.createTextNode("Excluir"); //adiciona um texto no link
    linkElement.appendChild(linkText);
    tudoElement.appendChild(linkElement);
  }
}
rederTudos(); //rederiza a lista de tudos
 
//função que adiciona novos itens na lista
function addTudo(){
  if(inputElement.value != " "){
  var tudoText = inputElement.value; // recupera o valor digitado no input
  tudos.push(tudoText); // e adiciona na ultima posição da lista
  inputElement.value = ""; //limpa o campo input
  rederTudos(); //rederiza a lista de tudos
  saveStorage();
  }else{
      alert("kdsjdis")
  }

}

btnElement.onclick = addTudo; //chamando a função no click do botão


function deletTudo(posicao){
  tudos.splice(posicao,1);
  rederTudos();
  saveStorage();
}

function saveStorage(){//localStorage é uma variavel global e ta utilizandoa função setItem que vai setar o valor nesse caso a list_tudos poderia se quaquer nome
  localStorage.setItem("list_tudos", JSON.stringify(tudos));// o JSON.stringify converte a lista de tudos em String//tudos é valor 
}


