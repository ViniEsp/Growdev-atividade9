const pessoas = [];

do {
  const pessoa = {};
  pessoa.nome = prompt("Informe o nome da pessoa");
  pessoa.idade = prompt("Informe a idade da pessoa");
  pessoa.trabalhando = confirm("Essa pessoa esta trabalhando?");

  if (pessoa.trabalhando) {
    pessoa.salario = parseFloat(prompt("Informe o salario da pessoa"));
  }

  pessoas.push(pessoa);

  var continuar = confirm("Deseja continuar cadastrando");
} while (continuar);

document.write("Pessoas desempregadas: <br>");
for (const pessoa of pessoas) {
  if (!pessoa.trabalhando) {
    document.write("Nome: ", pessoa.nome + "<br>");
    document.write("Idade: ", pessoa.idade + "<br>");
  }
}

document.write("Pessoas empregadas com salários menores que 2500:");
for (const pessoa of pessoas) {
  if (pessoa.trabalhando && pessoa.salario < 2500) {
    document.write("Nome: ", pessoa.nome + "<br>");
    document.write("Idade: ", pessoa.idade + "<br>");
    document.write("Salario: ", pessoa.salario + "<br>");
  }
}

document.write("Pessoas empregadas com salários maiores que 2500:");
for (const pessoa of pessoas) {
  if (pessoa.trabalhando && pessoa.salario > 2500) {
    document.write("Nome: ", pessoa.nome + "<br>");
    document.write("Idade: ", pessoa.idade + "<br>");
    document.write("Salario: ", pessoa.salario + "<br>");
  }
}