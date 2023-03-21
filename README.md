<div class="markdown prose w-full break-words dark:prose-invert light"><h1>Buscante</h1><p>Projeto desenvolvido em Angular para buscar livros utilizando a API do Google Books. A aplicação possui um campo de busca e retorna uma lista de livros correspondentes, exibindo informações como autor, data de publicação e editora. Ao clicar no botão "Mais detalhes" em cada livro, é aberto um modal com mais informações sobre o livro e um botão para ler uma prévia no Google Books.</p><h2>Pré-requisitos</h2><ul><li><a href="https://nodejs.org/en/" target="_new">Node.js</a> instalado na versão 12.16 ou superior</li><li><a href="https://angular.io/cli" target="_new">Angular CLI</a> instalado globalmente</li></ul><h2>Instalação</h2><ol><li>Clone o repositório: <code>git clone https://github.com/seu-usuario/buscante.git</code></li><li>Instale as dependências: <code>npm install</code></li></ol><h2>Utilização</h2><ol><li>Inicie o servidor: <code>ng serve</code></li><li>Abra o navegador e acesse <code>http://localhost:4200</code></li></ol><h2>Estrutura do projeto</h2><ul><li><code>src/app/componentes/cabecalho</code>: componente do cabeçalho da página, contendo a logo da aplicação e links para a página do Github e LinkedIn.</li><li><code>src/app/componentes/livro</code>: componente para exibir um cartão de livro com informações básicas.</li><li><code>src/app/componentes/rodape</code>: componente do rodapé da página.</li><li><code>src/app/views/lista-livros</code>: componente principal da aplicação, responsável por exibir a barra de busca e a lista de livros.</li><li><code>src/app/views/modal-livro</code>: componente para exibir mais informações sobre um livro em um modal.</li></ul><h2>Padrão de projetos</h2><p>A aplicação utiliza o padrão de projetos "dumb components" e "smart components", com a divisão entre componentes de apresentação (mais simples, que não possuem comportamento) e componentes contêiner ou inteligentes (que detêm informações e as enviam para outros componentes).</p><h2>API externa</h2><p>A aplicação consome a API do Google Books para buscar informações sobre livros.</p><h2>Licença</h2><p>Este projeto está sob a licença MIT. Consulte o arquivo <a href="LICENSE" target="_new">LICENSE</a> para obter mais informações.</p></div>

# Buscante

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
