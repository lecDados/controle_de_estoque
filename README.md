# Sistema de Controle de Estoque

Sistema web para gerenciamento de estoque desenvolvido com React, Node.js, Express e MongoDB.

## Funcionalidades

* Cadastro de produtos
* Controle de entradas e saídas
* Atualização automática de estoque
* Consulta de produtos cadastrados
* Persistência de dados com MongoDB
* API REST para comunicação entre front-end e back-end

---

# Tecnologias Utilizadas

## Front-end

* React
* TypeScript
* HTML5
* CSS3

## Back-end

* Node.js
* Express

## Banco de Dados

* MongoDB

---

# Instalação

## 1. Clonar o repositório

```bash
git clone URL_DO_REPOSITORIO
```

---

## 2. Instalar dependências do Back-end

```bash
cd backend

npm install
```

Dependências principais:

```bash
npm install express mongoose cors dotenv
```

Dependências de desenvolvimento:

```bash
npm install nodemon --save-dev
```

---

## 3. Instalar dependências do Front-end

```bash
cd frontend

npm install
```

Dependências principais:

```bash
npm install react react-dom
```

Caso utilize TypeScript:

```bash
npm install typescript
```

---

# Configuração

Criar um arquivo `.env` na pasta do servidor:

```env
PORT=3000

MONGO_URI=sua_string_de_conexao
```

---

# Executando o Projeto

## Iniciar o Back-end

Modo desenvolvimento:

```bash
npm run dev
```

ou

```bash
nodemon server.js
```

Modo produção:

```bash
node server.js
```

---

## Iniciar o Front-end

```bash
npm run dev
```

---

# Estrutura do Projeto

```text
projeto/
│
├── frontend/
│   ├── src/
│   ├── components/
│   └── pages/
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   ├── models/
│   └── server.js
│
└── README.md
```

---

# API

### Criar Produto

```http
POST /produtos
```

### Listar Produtos

```http
GET /produtos
```

### Atualizar Produto

```http
PUT /produtos/:id
```

### Remover Produto

```http
DELETE /produtos/:id
```

---

# Objetivo

Este projeto foi desenvolvido para praticar e aplicar conceitos modernos de desenvolvimento Full Stack, arquitetura de software, integração entre APIs REST e banco de dados NoSQL, criando uma aplicação simples, organizada e escalável.

## Autor

Luiz Eduardo
