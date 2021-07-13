const livros = require('./database')


//pegar o imput 
const readline = require('readline-sync')

const entradaInicial = readline.question('Deseja buscar um livro? (S/N) ')

//Se sim, mostra categorias disponíveis e pergunta qual a categoria desejada
if (entradaInicial.toLocaleUpperCase() === 'S') {
    console.log('Essas são as categorias disponíveis:')
   // livros.map(livro => console.log(livro.categoria))   tentativa de listar automaticamente as categorias
   //console.log('Epopeia', ' / Romance', ' / Técnico/Didático ')

 //solução de outros participantes do HC
   let categoriasExistentes = [];
    for (let i = 0; i < livros.length; i++) {
        if (categoriasExistentes.includes(livros[i].categoria)) {
            continue;
        } else {
            categoriasExistentes.push((livros[i].categoria))
            console.log(livros[i].categoria);
        }
    }
 
   const entradaCategoria = readline.question('Qual categoria você escolhe? ')

   const retorno = livros.filter(livro => livro.categoria === entradaCategoria)
   console.table(retorno)
}

//Se a resposta for não

else {
    const livrosOrdenados = livros.sort((a,b) => a.paginas - b.paginas)
    console.log('Essas são todos os livros disponíveis:')
    console.table(livrosOrdenados)
}