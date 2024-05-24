[<img alt='Blip' height='110' widht='auto' src='https://www.blip.ai/wp-content/uploads/2023/06/logotipo.svg'>](https://www.blip.ai/)

# Blip - Deafio Chatbot Developer
<hr>

## Sumário
:pencil2: [Descrição da atividade](#descrição-da-atividade)
:computer: [Tecnologias utilizadas](#tecnologias-utilizadas)
:rocket: [Como executar o projeto](#como-executar-o-projeto)
:open_file_folder: [Layout](#layout-diretório)
<hr>

## Descrição da atividade
 - Criar uma API utilizando JavaScript ou C# para que ela retorne quais são os 5 repositórios, utilizando C#, com a data de criação mais antiga do repósitorio da [Blip no GitHub](https://github.com/takenet), utilizando como intermediário a API do GitHub;
 - Hospedar esta API em um serviço em nuvem.
 - Criar um fluxo conversasional no [builder da plataforma da Blip] (https://account.blip.ai/login?utm_source=youtube&utm_medium=link&utm_term=ama_86&utm_content=ama_86) que irá demonstrar ao usuário, em um Carrossel os valores da empresa e também um card de desafio, respectivamente os cards de valores direcionando aos valores da empresa e o de desafio mostrando outro carrossel com os 5 repositórios com o filtro e ordenação solicitados.
 <hr>

## Tecnologias utilizadas
 - NodeJs;
 - JavaScript;
 - Express;
 - Google Cloud.
 <hr>

## Executando localmente
A Api necessita de GitHub Access Token (Classic) para funcionar corretamente, evitando 'Timeout' ou 'Too Many Requests', basta seguir o [tutorial do GitHub](https://docs.github.com/pt/enterprise-cloud@latest/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens), tendo o token em mãos é necessario criar um arquivo, dentro da pasta API, chamado '.env'
e nele dizer que a variável de ambiente 'GITHUB_TOKEN' recebe como valor seu token
```bash
git clone https://github.com/BrunoRafaSilva/DesafioTecnicoBlip.git
cd DesafioTecnicoBlip
cd Api
npm install
npm run start
```
<hr>

## Layout diretório
```txt
├── Api/
|   └── Assets/
|   |   └── Assets/
|   |       └── carousel/  # Pasta de imagens do carrossel
│   └── controllers/
|   |   └── Assets/
|   |   |   └── assetsValues.js
│   |   └── Repository/
│   |   |   └── repositoriesCarousel.js
│   |   └── helloWorld.js
│   └── middleware/
|   |   └──errorController.js
│   └── routers/
│   |   └── assets.js
│   |   └── hello.js
│   |   └── repositories.js
│   |   └── router.js
│   └── service/
│   |   └── Assets/
|   │   |   └── carouselImage.js
│   |   └── Repository/
│   |   |   └── reposConsult.js
│   └── utils/
│   |   └── filterParams.js
│   |   └── mapPropertys.js
│   |   └── sortOrderDate.js
|   └── index.js
|   └── package.json
|   └── package-lock.json
|   └── .eslintrc.cjs
|   └── README.md
├── Flow/
|   └── Desafio Chatbot Blip.json

```

