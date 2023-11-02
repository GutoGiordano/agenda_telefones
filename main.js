const form = document.getElementById('formularioEntrada'); //Declarando as variáveis
const inputNomeCadastrado = document.getElementById('nome');
const inputTelefoneCadastrado = document.getElementById('telefone');
const nomes = []; //Criação dos arrays que vão receber os dados dos nomes e telefones
const telefones = [];

let linhas = ''; //Variável criada para não substituir as linhas e sim criar novas

form.addEventListener('submit', function(e) {
    e.preventDefault(); //Evitando o carregamento da página

    //inserindo as funções na ordem em que elas ocorrem na página html
    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    let nomeFormatado = formatarNome(inputNomeCadastrado.value);
    if (nomes.includes(nomeFormatado)) {
        alert(`O nome: ${nomeFormatado} já foi cadastrado!`);
    } else {
        nomes.push(nomeFormatado); // Adiciona o novo nome ao array de nomes
        let linha = '<tr>';
        linha += `<td>${nomeFormatado}</td>`;
        linha += `<td>${formatarTelefone(inputTelefoneCadastrado.value)}</td>`;
        linha += '</tr>';
        linhas += linha; // Adiciona a nova linha às linhas existentes
    }
}

//Formatando o nome atraves do .split que vai dividir a string em arrays e configurando
function formatarNome(nome) {
    return nome.split(' ').map(function(palavra) {
        return palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase();
    }).join(' ');
}

//Formatando o telefone onde o toString converte um objeto em String e o .slice retorna as partes secionadas
function formatarTelefone(telefone) {
    telefone = telefone.toString();
    return telefone.slice(0, 2) + " " + telefone.slice(2, 3) + " " + telefone.slice(3, 7) + " " + telefone.slice(7);
}

function atualizaTabela() {
    const tabela = document.getElementById('corpoTabela');
    tabela.innerHTML = linhas;

    // limpando os campos preenchidos e enviados
    inputNomeCadastrado.value = '';
    inputTelefoneCadastrado.value = '';
}