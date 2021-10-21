# O que são linguagens de programação

### O que são linguagens de programação

"é uma linguagem escrita formal que especifica um conjunto de instruções e regras usadas para gerar programas (software)."

Função das linguagens de programação é servir de meio de comunicação entre humanos e computadores

---

### Tipos de linguagens

##### Alto nível

Essas são aquelas cuja a sintaxe se aproxima da nossa linguagem e se distanciam mais da linguagem de máquina.

Exemplo: C, Python, Java, JavaScript, Go, Elixer...

---

##### Baixo nível

É aquela que se aproxima mais da linguagem de máquina. Essas são as que você precisa ter conhecimento direto de arquitetura do computador para fazer alguma coisa.

Exemplo: Assembly

----

##### Compiladas

É uma linguagem de programação em que  o código fonte, é executado diretamente pelo sistema operacional ou pelo processador, após ser traduzido pro meio de um processo chamado compilação

---

##### Interpretadas

É uma linguagem de programação em que o código fonte é executado por um programa de computador chamado interpretador, que em seguida é executado pelo sistema operacional ou processador.

----

### O que é Portugol?

"É uma pseudolinguagem que permite ao programador pensar no problema em si e não no equipamento que irá executar o algoritmo".

##### Exemplo

```protobuf
/*
	author: Vieiraork
	github: https://github.com/Vieiraork
	
	Execute no portugol stúdio
	Disponível em: http://lite.acad.univali.br/portugol/
*/

programa
{
	
	funcao inicio()
	{
		escreva("Calculo da média \n")
		real nota1,nota2,nota3,nota4,media
		cadeia nome

		escreva("Digite o nome do aluno: ")
		leia(nome)
		
		escreva("nota 1: ")
		leia(nota1)
		escreva("nota 2: ")
		leia(nota2)
		escreva("nota 3: ")
		leia(nota3)
		escreva("nota 4: ")
		leia(nota4)

		media = (nota1+nota2+nota3+nota4)/4

		escreva("Seu nome é " + nome + ", sua média é " + media)
	}
}
```

