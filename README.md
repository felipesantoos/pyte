# Pyte
Um CRUD feito em Python e SQLite.

# Primeiros passos
- `Opcional` Baixe e instale o PyCharm [aqui](https://www.jetbrains.com/pt-br/pycharm/).
- `Obrigatório` Baixe a versão mais recente do Python [aqui](https://www.python.org/downloads/).
- `Recomendado` Baixe o BD Browser do SQLite [aqui](https://sqlitebrowser.org/).

# Instalação do Python
- Extraia o arquivo compactado.
- Entre na pasta extraída.
- Na linha de comando, execute (dentro da pasta):
  1. `./configure`
  2. `make`
  3. `make test`
  4. `sudo make install`

# Configuração do ambiente no Linux
```bash
mkdir python # cria a pasta python
cd python # entra na pasta python
python3 --version # exibe a versão instalada do python
python3 -m venv venv # cria a máquina virtual do projeto
cd venv/bin # entra na pasta python/venv/bin/
. activate # roda máquina virtual
pip install Django # instala o módulo do Django apenas no projeto atual
cd ../.. # volta para a pasta python
django-admin startproject project . # cria a pasta project (e seus arquivos internos) na pasta python.
python3 manage.py startapp app # cria a pasta app (e seus arquivos internos) na pasta python.
```

# Como rodar o projeto
```bash
python3 manage.py runserver
```

# Criação do banco de dados no SQLite
```bash
python3 manage.py makemigrations
python3 manage.py migrate
```

# Criando o formulário
```html
{{form}}
{{form.as_p}}
<div class="form-group mt-4">
    {{form.modelo}}
</div>
<div class="form-group mt-4">
    {{form.marca}}
</div>
<div class="form-group mt-4">
    {{form.ano}}
</div>
```

# Anotações

- `div.col-8.m-auto.pt-2.pb-2.text-center` gera...
```html
<div class="col-8 m-auto pt-2 pb-2 text-center">
    <h1>CRUD com Python</h1>
</div>
```
- Link CDN do Bootstrap:
```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
```
- Como acessar os dados passados pela função que renderizou a página web:
```html
<td>{{carro}}</td>
<td>
    {% if carro == 'Fiat Uno' %}
        Este é um {{carro}}
    {% else %}
        Este não é um {{carro}}
    {% endif %}
</td>
```
