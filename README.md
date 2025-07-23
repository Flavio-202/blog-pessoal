# 📚 Blog Pessoal - API Backend

Este é um projeto desenvolvido durante o bootcamp **Full Stack JavaScript** da [Generation Brasil](https://brazil.generation.org/).  
O objetivo é criar uma **API RESTful** para um Blog Pessoal, onde usuários podem se cadastrar, fazer login, criar postagens e vincular essas postagens a temas específicos.

---

## 🚀 **Funcionalidades**
- Cadastro e login de usuários (com autenticação JWT)
- Criptografia de senhas com **bcrypt**
- CRUD completo de postagens
- CRUD de temas
- Relacionamentos entre tabelas: `Usuário`, `Postagem` e `Tema`
- Busca de postagens pelo título
- Documentação automática dos endpoints com **Swagger**
- Testes de todos os endpoints usando **Insomnia**

---

## 🛠 **Tecnologias utilizadas**
- [NestJS](https://nestjs.com/) – framework Node.js para construir aplicações escaláveis
- [TypeScript](https://www.typescriptlang.org/) – linguagem fortemente tipada
- [TypeORM](https://typeorm.io/) – ORM para mapeamento objeto-relacional
- [MySQL](https://www.mysql.com/) – banco de dados relacional
- [JWT](https://jwt.io/) – autenticação baseada em token
- [bcrypt](https://github.com/kelektiv/node.bcrypt.js) – criptografia de senhas
- [Swagger](https://swagger.io/) – documentação automática da API
- [Insomnia](https://insomnia.rest/) – ferramenta para testar as requisições HTTP

---

## 🏗 **Arquitetura**
O projeto segue uma **arquitetura modular** do NestJS:
- **Entities**: definem o modelo de dados (Usuário, Postagem, Tema)
- **Controllers**: recebem as requisições HTTP
- **Services**: implementam as regras de negócio
- **Guards**: responsáveis pela autenticação JWT
- **Pipes**: validação global de dados

---

## 📄 **Documentação da API**
Após rodar o projeto, acesse a documentação interativa:
http://localhost:4000/swagger

yaml
Copiar
Editar

---

## ⚙️ **Como executar o projeto localmente**

### Pré-requisitos
- Node.js (v18 ou superior recomendado)
- MySQL instalado e rodando
- npm ou yarn
- [Insomnia](https://insomnia.rest/) (opcional, para testar)

### Passos
1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
Instale as dependências:

bash
Copiar
Editar
npm install
Configure o banco de dados:

Crie um banco de dados MySQL (ex.: db_blogpessoal)

Crie ou ajuste o arquivo .env com as credenciais do banco:

bash
Copiar
Editar
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=db_blogpessoal
JWT_SECRET=sua_chave_secreta

Rode as migrations ou sincronize as tabelas automaticamente (conforme configurado):

bash
Copiar
Editar
npm run start:dev

Acesse:
Swagger: http://localhost:4000/swagger

🧪 Testes com Insomnia
Todos os endpoints da API foram testados usando o Insomnia.
Você também pode importar a collection que está disponível na pasta docs/ ou insomnia/ do repositório para realizar os testes.

🙌 Agradecimentos
Projeto desenvolvido durante o bootcamp da Generation Brasil, com apoio de colegas e instrutores.

✍️ Autor
Flavio Aguilar
Desenvolvedor Full Stack
flavioaguilar2001@gmail.com

📌 Licença


