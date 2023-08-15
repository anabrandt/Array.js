

// MAP - percorre o array, possibilitando a manipulação do conteúdo

let vendedores = [
    {nome: 'Luis', vendas: 350},
    {nome: 'Nicole', vendas: 450},
    {nome: 'Enrico', vendas: 250}
]

let comissao = vendedores.map(vendedor => `${vendedor.nome} tem a comissão de ${vendedor.vendas * 0.3}`)

console.log(comissao);

let listaComissao = vendedores.map((vendedor,i) => `${i+1}º - ${vendedor.nome} tem a comissão de ${vendedor.vendas * 0.3}`)

console.log(listaComissao);

// FILTER - filtra os elementos deixando apenas os que atendem ao critério

let alunos = [
    {nome: 'Guilherme', senha: 123},
    {nome: 'João', senha: 456},
    {nome: 'Gabriel', senha: 789}
]

let logado = alunos.filter(user => user.nome === 'Guilherme' && user.senha === 123)

console.log(...logado);   // SPREAD


//REDUCE - Percorre todo o array e retorna um único valor.

let pagto = vendedores.reduce((total, vend) => total + (vend.vendas * 0.3),0)

console.log(pagto);

//EVERY - analisa o array e só retorna verdadeiro se todos atenderem ao critério

let filaBrinquedo = [
    {nome:'Luis', altura: 1.50, idade: 35},
    {nome:'Guilherme', altura: 1.55, idade: 20},
    {nome:'Nicole', altura: 1.65, idade: 18}
]

let rodada = filaBrinquedo.every(pessoa => pessoa.altura >= 1.70)

console.log(rodada ? `Vamos começar` : `Não vamos começar`); //Ternário

//SOME - anaçisa o array e retorna verdadeiro se pelo menos 1 atender ao critério

let aviso = filaBrinquedo.some(pessoa => pessoa.altura >= 1.70)

console.log(aviso ? `Quem for maior de 1.70 esperar no brinquedo`:`Desculpe, vocês não tem a altura mínima de segurança.`);

//FIND - busca a primeira interação verdadeira

let respon = filaBrinquedo.find(resp => resp.idade >= 18)

console.log(`${respon.nome}, por favor, pegar a bola.`);

// INCLUDE - verifica se o valor está incluso

let convidados = ['Nicole', 'Guilherme', 'prof Luís', 'prof Rafael', 'João', 'Luiz','prof Henrique']

let professores = convidados.filter(conv => conv.includes('prof'))

console.log(convidados);
console.log(professores);




















