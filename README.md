# Academia API

Esta é uma API simples para gerenciar alunos de uma academia, onde você pode cadastrar alunos, autenticar e autorizar sua entrada para que possam realizar exercícios.

## Tecnologias Utilizadas

- Node.js
- TypeScript
- Express.js
- SQLite
- Knex.js

## Configuração

1. Clone o repositório:
````
git clone <URL_DO_REPOSITORIO>

````
2. Instale as dependências:
````
npm install

````
3. Crie o arquivo de banco de dados SQLite:
````
npx knex migrate:latest

````
4. Semeie o banco de dados com dados de exemplo:
````
npx knex seed:run

````

## Executando a API

Para iniciar a API, execute o seguinte comando:

````
npm start

````

A API estará disponível em [http://localhost:3000](http://localhost:3000).

## Endpoints

A API possui os seguintes endpoints:

- `GET /alunos`: Retorna a lista de todos os alunos cadastrados.
- `GET /alunos/:id`: Retorna os detalhes de um aluno específico com base no ID.
- `POST /alunos`: Cadastra um novo aluno.
- `PUT /alunos/:id`: Atualiza os dados de um aluno com base no ID.
- `DELETE /alunos/:id`: Exclui um aluno com base no ID.

## Exemplo de Uso

- Listar todos os alunos: `GET http://localhost:3000/alunos`
- Buscar um aluno por ID: `GET http://localhost:3000/alunos/1`
- Cadastrar um novo aluno: `POST http://localhost:3000/alunos`
  - Corpo da solicitação:
    ```json
    {
        "nome": "João",
        "idade": 28,
        "email": "joao@example.com"
    }
    ```
- Atualizar um aluno por ID: `PUT http://localhost:3000/alunos/1`
  - Corpo da solicitação:
    ```json
    {
        "nome": "João da Silva",
        "idade": 29,
        "email": "joao.silva@example.com"
    }
    ```
- Excluir um aluno por ID: `DELETE http://localhost:3000/alunos/1`

Lembre-se de que esta é uma API de exemplo simples e pode ser expandida de acordo com suas necessidades.

## Licença

Este projeto está sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para obter mais detalhes.



