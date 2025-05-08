## Projeto Feira Paulo Freire.

Está é um projeto feita exclusivamente para uma feira anual da ETEC Professor Adhemar Batista Heméritas. Este servidor WEB tem como objetivo informativo de falar sobre cybersegurança. No fim do site, há jogos criados por todos os alunos do Terceiro Ano do ensino médio técnico profissional em Informática para Internet do ano de 2025.

---


### Modo de iniciação:

- Após criar um clone deste repositório, dentro da pasta do mesmo, criar um arquivo '[.env](https://www.npmjs.com/package/dotenv)'.



- Dentro do arquivo '.env' setar as seguintes variáveis: 

``` .env
    DB_NAME=
    DB_USER=
    DB_PASSWORD=
    DB_PORT=
    DB_HOST=
```

-  Após a criação do arquivo, atribuir as variáveis de acordo com os respectivos: Nome, Usuário, Senha, Porta e Host do seu banco de dados MySQL. O banco de dados pode ser criado usando [MySQL Workbench 8.0 CE](https://dev.mysql.com/downloads/workbench/). -  Não se esqueça de ativar o seu banco de dados usando um Serviço semelhante ao Wamp ou UsbWebServer para ativar a sua port 3306 e, assim, relizar a conexão com ssua base de dados -.

- Em seguida, criar um Schema no seu banco de dados nomeado com o "DB_NAME=" setado anteriomente.

- Ao terminar de configurar o seu Banco de Dados, abrir o Terminal do seu clone deste repositório e digitar as seguintes informações:

``` bash
npm i
```

``` bash
npm run dev
```

- Feito isso, a aplicação estará rodando no seu [localhost:3005](http://localhost:3005).


## Dependências:
``` JSON
    "dependencies": {
        "bcryptjs": "^3.0.2",
        "dotenv": "^16.4.7",
        "ejs": "^3.1.10",
        "express": "^4.21.2",
        "mysql2": "^3.13.0",
        "nodemon": "^3.1.9",
        "sequelize": "^6.37.6",
        "sha1": "^1.1.1"
    }
```