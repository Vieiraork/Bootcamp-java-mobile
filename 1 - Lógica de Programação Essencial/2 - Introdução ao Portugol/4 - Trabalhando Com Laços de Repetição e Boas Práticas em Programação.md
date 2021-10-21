# Trabalhando com laços de repetição e boas práticas em programação

### O que é uma estrutura de repetição?

Consiste em um bloco que realiza a execução de uma instrução mais de uma vez.



##### Exemplo

```protobuf
programa
{
	
	funcao inicio()
	{
		inteiro contador,limite,resultado,taboada,final
		
		contador = 0
		limite = 10

		escreva("Digite qual taboada você deseja: ")
		leia(taboada)
		escreva("Qual será o último número da taboada: ")
		leia(final)

		faca {
			resultado = taboada * contador
			escreva(taboada +" X " + contador + " = " + resultado + "\n")
			contador++
		} enquanto (contador <= final)
	}
}
```

