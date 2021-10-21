# Desvios condicionais e comentários

### Desvio condicional - se

######  se

É utilizada a palavra reservada **se**, a condição a ser testada entre parênteses e as instruções que devem ser executadas entre chaves caso desvio seja verdadeiro

###### senão

condição em que o código irá entrar caso o teste lógico der resultado falso.

```protobuf
se (media >= 7) {
	escreva("Aprovado!")
}
/*
	Comentário em multiplas linhas em portugol
*/

// Comentário em portugol
senao {
	escreva("Reprovado!")
}
```

---

### Desvio condicional - caso

Este comando é similar aos comando se e senão, e reduz a complexidade na escolha de diversas opções.

```protobuf
programa
{
	
	funcao inicio()
	{
		inteiro menu = 0
		
		escreva("1 - Netflix \n")
		escreva("2 - Amazon Prime \n")
		escreva("3 - HBO GO \n")
		escreva("4 - Sair \n")

		escreva("Escolha uma das opções: ")
		leia(menu)

		escolha(menu) {
			caso 1:
				escreva("Abrindo Netflix...")
				pare
			caso 2:
				escreva("Abrindo Amazon Prime...")
				pare
			caso 3:
				escreva("Abrindo HBO GO...")
				pare
			caso 4:
				escreva("Saindo...")
				pare
			caso contrario:
				escreva("Opção inválida. Digite valores entre 1 e 3.")
				pare
		}
	}
}
```

