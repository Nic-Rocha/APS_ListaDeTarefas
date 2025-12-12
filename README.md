# 📝 APS | Lista de Tarefas

![Project Status](https://img.shields.io/badge/Status-Concluído-brightgreen) ![React](https://img.shields.io/badge/Frontend-React-blue) ![Python](https://img.shields.io/badge/Backend-Python-yellow)

> Uma aplicação Fullstack de Lista de Tarefas (To-Do List) desenvolvida como parte da Atividade Prática Supervisionada (APS) da máteria de Programação Web Front-End (IHC).

## 📸 Demonstração

https://github.com/user-attachments/assets/028517ca-ff51-43c6-ad28-921ed28206d6

## 🚀 Sobre o Projeto

Este projeto se trata de um gerenciador de tarefas pessoais. O objetivo principal foi aplicar conceitos aprendidos em aula no desenvolvimento do front-end, e na conexão com o back-end, projetado pelo professor.

## ✨ Funcionalidades

- [x] **Autenticação Segura**: Sistema de Login e Registro de usuários com persistência de token.
- [x] **Gestão de Tarefas**: Criação, visualização e gerenciamente de tarefas com prazos.
- [x] **Feedback Visual**: Alertas e validações de formulário em tempo real.

## 🛠️ Tecnologias Utilizadas

#### Front-end (Client)
* **React + Vite**
* **React Router DOM**
* **CSS Modules**

#### Back-end (Server)
* **Python**
* **FastAPI**
* **SQLite** 

## 📂 Como Rodar o Projeto

#### **Pré-requisitos:**

* **Node.js**
* **Yarn**
* **Python**

##### Rodando o Back-end:
```bash
    # Instalando Requerimentos
    cd server
    pip install -r requirements.txt
```

```bash
    # Ativando Ambiente Virtual
    cd .. # Volte para a raiz, ou para o nivel onde a pasta venv está
    source venv/Scripts/activate
```
```bash
    # Rodando o Servidor
    uvicorn main:app --reload
```

##### Rodando o Front-end:

```bash
    cd todo-list/client/aps_ihc-todolist
    yarn # Para instalar as dependências
    yarn dev # Para rodar a página
```
## 🤝 Autores

* **[Yasmin Nascimento]** - [GitHub](https://github.com/yasrcha) 
* **[Nicolle Rocha]** - [GitHub](https://github.com/Nic-Rocha)
