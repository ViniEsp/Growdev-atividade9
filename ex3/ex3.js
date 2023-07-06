// Criando objeto para  o primeiro aluno
var aluno1 = {
    nome: "vini",
    nota1: 7.5,
    nota2: 8.0
  };
  
  // Criando objeto para  o segundo aluno
  var aluno2 = {
    nome: "carla",
    nota1: 9.0,
    nota2: 8.5
  };
  
console.log("Aluno 1");
console.log("Nome: " + aluno1.nome);
console.log("Nota 1: " + aluno1.nota1);
console.log("Nota 2: " + aluno1.nota2);
  

console.log("Aluno 2");
console.log("Nome: " + aluno2.nome);
console.log("Nota 1: " + aluno2.nota1);
console.log("Nota 2: " + aluno2.nota2);
  
var mediaAluno1 = (aluno1.nota1 + aluno1.nota2) / 2;
console.log("Média do Aluno 1: " + mediaAluno1);
  
var mediaAluno2 = (aluno2.nota1 + aluno2.nota2) / 2;
console.log("Média do Aluno 2: " + mediaAluno2);
  
var mediaTurma = (mediaAluno1 + mediaAluno2) / 2;
console.log("Média da Turma: " + mediaTurma);
  