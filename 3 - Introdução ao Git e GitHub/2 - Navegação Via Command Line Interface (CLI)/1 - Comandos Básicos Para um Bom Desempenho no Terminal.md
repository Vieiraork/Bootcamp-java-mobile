# Comandos básicos para um bom desempenho no terminal

### Listar pastas:

##### Win:

```shell
dir
```

##### Unix:

```bash
ls
```

---

### Navegar entre diretórios

##### Entrar em um diretório (ambos os sistemas operacionais):

```shell
cd <NOME DO DIRETÓRIO OU CAMINHO>
```

##### Para voltar a página anteior (ambos os sistemas operacionais):

```shell
cd ..
```

-----------

### Limpar tela:

##### Win:

```shell
cls
```

##### Unix:

```bash
clear
```

Ou pode ser utilizado o atalho **CTRL + L**

---

### Criar arquivo

##### Win

```shell
echo > <NOME DO ARQUIVO SEGUIDO DA EXTENSÃO>
```

##### Unix

```bash
touch "NOME DO ARQUIVO COM ESPAÇO.md"
```

-----

### Apagar arquivos dentro de diretórios:

##### Win:

```shell
del <NOME DA PASTA> /S /Q
```

##### Unix:

```bash
rm -rf <NOME DA PASTA>
```

A flag "-rf" é usada para que a pasta seja deletada mesmo possuindo outros arquivos ou pastas dentro da mesma sem a necessidade de confirmação da ação.

