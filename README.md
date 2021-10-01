<div align="center" id="top"> 
  <!--<img src="./.github/app.gif" alt="Api Email" />-->

  &#xa0;

  <!-- <a href="https://apiemail.netlify.app">Demo</a> -->
</div>

<h1 align="center">Api Email</h1>

<p align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/dbombonate/api-email?color=56BEB8">

  <img alt="Github language count" src="https://img.shields.io/github/languages/count/dbombonate/api-email?color=56BEB8">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/dbombonate/api-email?color=56BEB8">

  <img alt="License" src="https://img.shields.io/github/license/dbombonate/api-email?color=56BEB8">

  <!-- <img alt="Github issues" src="https://img.shields.io/github/issues/dbombonate/api-email?color=56BEB8" /> -->

  <!-- <img alt="Github forks" src="https://img.shields.io/github/forks/dbombonate/api-email?color=56BEB8" /> -->

  <!-- <img alt="Github stars" src="https://img.shields.io/github/stars/dbombonate/api-email?color=56BEB8" /> -->
</p>

<!-- Status -->

<!-- <h4 align="center"> 
	🚧  Api Email 🚀 Under construction...  🚧
</h4> 

<hr> -->

<p align="center">
  <a href="#dart-about">Sobre</a> &#xa0; | &#xa0; 
  <!--<a href="#sparkles-features">Features</a> &#xa0; | &#xa0;-->
  <a href="#rocket-technologies">Tecnologias</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-requirements">Requisitos</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-starting">Iniciando..</a> &#xa0; | &#xa0;
  <a href="#memo-license">Licença</a> &#xa0; | &#xa0;
  <a href="https://github.com/dbombonate" target="_blank">Autor</a>
</p>

<br>

## :dart: Sobre ##

Projeto de API para envio de email de notificação. Projeto criado originalmente para sanar um problema de preenchimento de formulário de solicitação de anonimização de dados em um cliente.

A API recebe um JSON contendo dados necessários, e faz a notificação por email para os responsáveis em tomar as devidas precauções.

<!--## :sparkles: Features ##

:heavy_check_mark: Feature 1;\
:heavy_check_mark: Feature 2;\
:heavy_check_mark: Feature 3;
-->
## :rocket: Tecnologias ##

A seguinte ferramenta foi usada nesse projeto:

- [Node.js](https://nodejs.org/en/)

## :white_check_mark: Requisitos ##

Antes de iniciar :checkered_flag:, você precisa do [Git](https://git-scm.com) e do [Node](https://nodejs.org/en/) instalados.

Também é necessário criar um arquivo .env com as variáveis de ambiente a seguir:

MAIL_TO=email de quem vai receber
MAIL_FROM=email de envio

USER=usuário de email
PASS=senha do email

SERVICE=serviço que será usado (smtp.xpto.net)

PORT=porta de execução

## :checkered_flag: Iniciando... ##

```bash
# Clonar o projeto
$ git clone https://github.com/dbombonate/api-email

# Acesso
$ cd api-email

# Instalar dependencias
$ npm install

# Iniciar o projeto
$ npm start

# O servidor vai iniciar em <http://localhost> na porta 
# definida na variável de ambiente.
```

## :memo: Licença ##

Esse projeto está sob a licença MIT. Para mais detalhes, veja o arquivo [LICENSE](LICENSE.md).


Made with :heart: by <a href="https://github.com/dbombonate" target="_blank">Daniel Bombonate</a>

&#xa0;

<a href="#top">Topo</a>
