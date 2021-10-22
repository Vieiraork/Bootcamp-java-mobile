# O que são registros

### Definição

Um **Registro** é uma estrutura que fornece um formato especializado para armazenar informações em memória.

Enquanto Arrays nos permitem armazenar vários dados de um único tipo de dados, o recurso de Registro nos permite armazenar mais de um tipo de dado.

##### Exemplo de registro em C

```c
struct exemplo {
    int dia;
    int mes;
    int ano;
    float altura;
    char nome;
}
```

##### Exemplo de registro em Python

```python
exemplo = list("Nome", 1.75, 27, True)

print(exemplo)
# Resultado ["Nome", 1.75, 27, True]
```

