# Backend
Com o backend é possivel realizar requisições a diversas rotas que estarão documentadas a baixo e como utiliza-las. Na construção do backend foi utilizado basicamente [Express](https://expressjs.com/), [Typeorm](https://typeorm.io/) e [Typescript](https://www.typescriptlang.org/).
Ele foi criado em conjunto com [Docker](https://www.docker.com/) e com isso na raiz do projeto terá como "Rodar" o backend.

## Comandos do backend
No package.json foi criado alguns comando para facilitar o desenvolvimento como:

`npm run start` & `npm run dev`
> **IMPORTANTE:** Os comandos a cima não estão configurados para rodar sem o docker, o backend depende do banco de dados então não faz sentido subir sem o docker, mas ainda estou vendo isso...

`npm rum build`
> Comando a cima vai transpilar tudo que estar em src/*.ts para dist/*.js.

`npm rum m:create --name=exemplo`
> Para criar uma nova "migration" pode utilizar o comando a cima e dentro do diretótio 'src/database/migrations/' estará sua nova migration.

`npm rum e:create --name=exemplo`
> Como a migration para criar uma nova "entity" pode utilizar o comando a cima e dentro do diretótio 'src/database/entities/' estará sua nova entity.

`npm rum s:create --name=exemplo`
> E por sua vez para criar uma nova "subscribe" pode utilizar o comando a cima e dentro do diretótio 'src/database/subscribers/' estará sua nova subscribe.

*em desenvolvimento...*