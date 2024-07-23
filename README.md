# Store Manager

<details>
<summary>🧑‍💻 O que foi desenvolvido</summary>

- Foi desenvolvido uma API RESTful utilizando a arquitetura em camadas!

- A API construída é um sistema de gerenciamento de vendas em que será possível criar, visualizar, deletar e atualizar produtos e vendas. Utilizando o banco de dados MySQL para a gestão de dados.

- Também foi desenvolvido testes para garantir as funcionalidade das implementações.

</details>
  
<details>
  <summary>📝 Habilidades trabalhadas </summary>

- Interagir com um banco de dados relacional MySQL;
- Implementar uma API utilizando arquitetura em camadas;
- Criar validações para os dados recebidos pela API;
- Escrever testes para APIs para garantir a implementação dos endpoints;

</details>

<details>
<summary>🐳 Iniciando a aplicação no Docker Compose</summary>

```bash
# Instale as dependências
npm install

# Inicie os containers do compose `backend` e `db`
# A aplicação estará disponível em `http://localhost:3001` em modo de desenvolvimento
docker-compose up -d

# É possível ver os logs da aplicação com `docker logs -n 10 -f <nome-do-container>`
docker logs -n 10 -f store_manager
```

</details>

<details>
<summary>🖥️ Iniciando a aplicação localmente</summary>

> ⚠️ Atenção: Ao rodar localmente, a aplicação deverá receber variáveis de ambiente como exemplificado em [`env.example`](./env.example) para poder se comunicar com o serviço de banco de dados.

```bash
# Instale as dependências
npm install

# Inicie apenas o serviço `db` no compose
docker-compose up -d db

# Inicie a aplicação em modo de desenvolvimento
npm run dev:local
```

</details>

<details>

<summary><strong> 🛠️ Instalando o projeto </strong></summary><br />

  1. Clone o repositório

- Use o comando: `git clone git@github.com:EvelynBastos/Store_Manager.git`
- Entre na pasta do repositório que você acabou de clonar:
    - `cd <diretório-do-projeto>`

2. Instale as dependências

    - npm install

</details>


![StoreManager](https://github.com/user-attachments/assets/3c8d9e87-57ce-4e34-83ff-54fa5ff4b030)


