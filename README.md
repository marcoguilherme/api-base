# Instalação

## Requisitos:

* git instalado em seu computador - [Instalador windows](https://git-scm.com/download/win)
* NodeJS instalado [Instalador Windows](https://nodejs.org/en/). Obs: recomendado a partir da versão 7 pois vem o NPM integrado
* NPM 

## 1º Passo - baixar o diretório

Para baixar o diretório em seu computador, utilizando o terminal do windows ou linux digite o seguite comando:

`git clone https://github.com/marcoguilherme/estrutura-ejs`

## 2º Passo - Instalação

Para instalar os modulos necessários que serão utilizados em seu projeto, utilizando o terminal, navegue até o diretório do projeto e digite o seguinte comando.

`npm install`

obs: Caso estiver utilizando o linux certifique-se de adicionar permissão de gravação para o usuario atual no diretório. `sudo chmod -R 777 estrutura-ejs`
Para mais informações consulte o manual do terminal do seu sistema operacional.


### Dependencias utilizadas no projeto

* body-parser: 1.18.2 - [Link](https://github.com/expressjs/body-parser)
* consign: 0.1.6 - [Link](https://github.com/jarradseers/consign)
* ejs: 2.5.7 - [Link](http://ejs.co/)
* express: 4.16.2 - [Link](http://expressjs.com/)
* express-validator: 3.2.0 - [Link](https://github.com/ctavan/express-validator)

## 3º Passo - Execução

O projeto foi feito para rodar na porta _80_ então caso estiver usando usando algum outro servidor simultaneamente, modique o arquivo `app.js` e modifique o numero da porta.

Para executar o projeto pode usar os seguintes comandos:

`npm start` - Para executar

`nodemon app` - Para executar enquanto estiver desenvolvendo. O nodemon automatica o reinicio do servidor para que não seja necessario reiniciar a aplicação para executar as modificações.

`browser-refresh app` - Uma outra alternativa ao nodemon, você pode dizer se tem alguma pasta que não precisa renderizar novamente para economizar recursos de seu computador.

Para instalar o Nodemon ou o Browser Refresh utilize o NPM

`npm install nodemon` - Nodemon

`npm install browser-refresh` - Browser Refresh

Você tambem pode executar seus projetos usando o pm2, removendo a necessidade de manter o terminal aberto enquanto seu projeto exevuta ou até mesmo no servidor, para mais informações [pm2](http://pm2.keymetrics.io/).

