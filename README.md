# Catálogo

API RESTFul da plataforma de catálogo de produtos.

## Dependências
* Node 10.5.3
* NPM
* Docker
* Docker Compose

## Configurando e rodando local
Renomeie o arquivo `.env.example` para `.env`.

### Rode os containers
```
docker-compose up -d
```

### Gerando a SECRET_KEY

Gere uma SECRET_KEY e adicione o valor a variável `SECRET_KEY` no arquivo.
Para rodar local, você pode por qualquer valor no SECRET_KEY ou gerar uma de forma mais segura com o comando:
```
node -e "console.log(require('crypto').randomBytes(256).toString('base64'));"
```

### Instalando as dependências do projeto
```
npm install
```

### Configure o MongoDB
Para rodar o projeto local, é necessário criar o usuário do banco de dados `catalogo` que utilizamos no sistema.
Acesse o container docker do mongo pelo terminal:
```
docker exec -it catalogo-api-mongo /bin/bash
```

Axecute o seguinte comando dentro do container:

```
mongo -uroot -pexample <<EOF
  use catalogo
  db.createUser({
    user: "catalogo_api_user",
    pwd: "catalogo_api_user",
    roles: ["readWrite"]
  })
EOF
```

## Acessando logs
Para visualizar os logs, é necessário rodar o comando do docker para visualizar os logs do container.
```
docker logs -f catalogo-api
```

## Tecnologias
* Node
* HapiJS Framework
* MongoDB
* Redis
* MySQL

## Redes sociais
* Telegram: @gilgleciooliveira
