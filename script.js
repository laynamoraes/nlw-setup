const form = document.querySelector("#form-habits") // estamamos selecionando através do ID o formulário que está no HTML
const nlwSetup = new NLWSetup(form) // inserimos a biblioteca NLWSetup criada pela Rocketseat
const button = document.querySelector("header button") // selecionamos o butão que está no HTML para que possamos acrescentar um evento

button.addEventListener("click", add) // estamos adicionando um evento para quando o botão for clickado ele possa chamar a função 'add'
form.addEventListener("change", save) // estamos adicionando um evento para quando houver uma mudança na página (selecionarmos checked em um dos checkbox) ele possa chamar a função 'save'

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5) // o Date serve para inserirmos uma data, o 2º elemento converte a data em uma string e por último utilizamos o slice para reduzirmos a data em apenas dia e mês
  const dayExists = nlwSetup.dayExists(today) // a função dayExists verifica se o dia já foi criado no app

  if (dayExists) {
    alert("Dia já incluso 🚫")
    return // o return serve para que o restante da função não seja executada e ela pare nesse trecho do código
  }

  alert("Adicionado com sucesso ✅")
  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data)) // localStorage é usado para armazenar dados no navegador e através do setItem criamos um par chave/valor, sendo o valor um objeto vindo da biblioteca, e por isso usamos o JSON.stringify para transformá-lo em uma string
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {} // agora transformamos a string em um objeto novamente
nlwSetup.setData(data) // utilizamos esses dados para montar a tabela de hábitos
nlwSetup.load() // a função renderiza tudo na tela
