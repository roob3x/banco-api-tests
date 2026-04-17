# Banco API Tests

## 📌 Descrição
Projeto de automação de testes para APIs REST utilizando JavaScript. Este repositório tem como objetivo validar os endpoints de uma API bancária, garantindo qualidade, confiabilidade e integridade dos serviços.

---

## 🎯 Objetivo
- Validar contratos de API REST
- Garantir regras de negócio
- Automatizar testes de regressão
- Facilitar integração com pipelines CI/CD

---

## 🧰 Stack utilizada
- Node.js
- Mocha
- Chai
- SuperTest
- Mochawesome
- Dotenv

---

## 📁 Estrutura de diretórios

```
banco-api-tests/
│
├── test/                # Casos de teste
├── fixtures/            # Massa de dados (JSON)
├── mochawesome/         # Relatórios gerados
├── .env                 # Variáveis de ambiente (não versionado)
├── package.json         # Dependências e scripts
└── README.md            # Documentação do projeto
```

---

## ⚙️ Configuração do ambiente

### 1. Clone o repositório
```bash
git clone https://github.com/roob3x/banco-api-tests
cd banco-api-tests
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Configure o arquivo `.env`

Crie um arquivo `.env` na raiz do projeto com o seguinte formato:

```
BASE_URL=http://localhost:3000
```

> Ajuste a URL conforme o ambiente da API.

---

## ▶️ Execução dos testes

Para rodar os testes:

```bash
npm test
```

---

## 📊 Relatórios

O projeto utiliza o Mochawesome para geração de relatórios em HTML.

Após a execução dos testes, o relatório será gerado no diretório:

```
/mochawesome
```

Para abrir o relatório:

```bash
open mochawesome/mochawesome.html
```

ou manualmente pelo navegador.

---

## 🔗 Documentação das dependências

- Mocha: https://mochajs.org/
- Chai: https://www.chaijs.com/
- SuperTest: https://github.com/ladjs/supertest
- Mochawesome: https://github.com/adamgruber/mochawesome
- Dotenv: https://github.com/motdotla/dotenv

---

## 📌 Observações

- Certifique-se de que a API esteja rodando antes de executar os testes
- O arquivo `.env` não deve ser versionado (incluído no `.gitignore`)
- Os relatórios são sobrescritos a cada execução

---

## 👨‍💻 Autor
Roberto Filho
