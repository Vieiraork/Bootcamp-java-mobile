# Aplicação prática com matrizes e vetores

### Matriz

Uma **Matriz** é uma coleção de variáveis do mesmo tipo, acessíveis comum único nome e armazenados contiguamente na memória.

A individualização de cada variável de um vetor é feita através do uso de **índices**.

---

### Vetor

Os **Vetores** matrizes de uma só dimensão.

##### Exemplo

```protobuf
programa
{
	
	funcao inicio()
	{
		cadeia frutas[4]
		inteiro contador
		
		contador = 0

		frutas[0] = "Maçã"
		frutas[1] = "Pera"
		frutas[2] = "Uva"
		frutas[3] = "Jaca"

		faca {
			escreva("Suco de " + frutas[contador] + ".\n")
			contador ++
		} enquanto (contador <= 3)
	}
}
```



