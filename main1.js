document.getElementById('formularioEntrada').addEventListener('submit', function(event) { //Incorporando o elemento formularioEntrada do HTML no JS, criando ouvintes através da ação submit do botão e a função de adiciona-los
// Previne o comportamento padrão do formulário
event.preventDefault();

// Criando as variáveis para armazenar os valores dos campos de entrada do formulário no html
var nome = document.getElementById('nome').value; //'nome' e 'telefone' foram criados atraves de id's no html e definindo o valor no 'nome' e 'telefone'
var telefone = document.getElementById('telefone').value;

// Criando novas linhas(tr) e células(td) para a tabela através das variáveis
var novaLinha = document.createElement('tr');
var celulaNome = document.createElement('td');
var celulaTelefone = document.createElement('td');

// Defindo o texto das células
celulaNome.textContent = nome;
celulaTelefone.textContent = telefone;

// Adiciona as células à linha
novaLinha.appendChild(celulaNome);
novaLinha.appendChild(celulaTelefone);

// Adicionando criada a linha ao corpo da tabela
document.getElementById('corpoTabela').appendChild(novaLinha);


// Limpando os campos para uma nova entrada
document.getElementById('nome').value = '';
document.getElementById('telefone').value = '';

})
