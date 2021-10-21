# Definição

"É uma estrutura que permite executar mais de uma vez o mesmo comando ou conjunto de comandos, de acordo com uma condição ou com um contador"

----

Exemplo:

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
		inteiro final,inicio
		final = 10
		inicio = 1
		
		faca {
			escreva("Você está no " + inicio + "º copo(s) de suco.\n")
			inicio ++
		} enquanto (inicio <= final)
		
		para(inteiro i = 0; i <= final; i++) {
			escreva("Você está no " + i + "º copo(s) de suco.\n")
		}
	}
}
```

[comment]: <> "Exemplo de estrutura de repetição em imagem"