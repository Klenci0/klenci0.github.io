# Calculadora Completa & Moderna 🧮✨

> Projeto de Calculadora desenvolvido com suporte às **4 operações matemáticas básicas**, **porcentagem**, **raiz quadrada** e **elevação ao quadrado**, disponível tanto em **Aplicação Web Interativa** quanto em **Script Python**.

---

## 🌟 Funcionalidades & Operações

| Operação | Símbolo | Tipo | Descrição / Exemplo |
| :--- | :---: | :---: | :--- |
| **Soma** | `+` | Binária | Adiciona dois valores (ex.: `10 + 5 = 15`) |
| **Subtração** | `−` | Binária | Subtrai dois valores (ex.: `20 − 8 = 12`) |
| **Multiplicação** | `×` | Binária | Multiplica dois valores (ex.: `6 × 7 = 42`) |
| **Divisão** | `÷` | Binária | Divide com proteção contra divisão por zero |
| **Porcentagem** | `%` | Binária | Calcula a taxa percentual de um valor (ex.: `15% de 200 = 30`) |
| **Elevação ao Quadrado** | `x²` | Unária | Eleva um número à segunda potência (ex.: `7² = 49`) |
| **Raiz Quadrada** | `√` | Unária | Calcula a raiz com proteção para números negativos (ex.: `√81 = 9`) |
| **Inversão de Sinal** | `±` | Unária | Alterna entre positivo e negativo |

---

## 🛡️ Tratamento de Erros e Proteções

1. **Divisão por Zero:** Exibe mensagem explicativa (`Erro: não é possível dividir por zero!`), evitando falhas no sistema.
2. **Raiz de Números Negativos:** Proteção contra números negativos no conjunto dos reais.
3. **Validação de Entrada:** Tratamento contra caracteres inválidos com `try/except` em Python e validação estrita em JavaScript.
4. **Precisão de Ponto Flutuante:** Correção de dízimas e arredondamentos típicos de ponto flutuante em JavaScript (ex.: `0.1 + 0.2`).

---

## 📁 Estrutura do Repositório

```text
├── index.html            # Ponto de entrada da aplicação Web
├── package.json          # Metadados e scripts do projeto (Vite/Node)
├── tsconfig.json         # Configurações TypeScript
├── vite.config.ts        # Configurações do Vite
├── .gitignore            # Arquivos ignorados pelo Git
├── calculadora.py        # Código completo da Calculadora em Python
├── calculadora.html      # Versão estática pura em HTML5
├── calculadora.css       # Estilos puros em CSS3 com modo claro/escuro
├── calculadora.js        # Lógica pura em JavaScript ES6+
└── src/
    ├── main.tsx          # Inicialização do React
    ├── App.tsx           # Interface visual da Calculadora com abas e histórico
    └── index.css         # Estilização global com Tailwind CSS
```

---

## 💻 Como Rodar

### 1. Aplicação Web (React / Vite)
```bash
# Instalar as dependências
npm install

# Iniciar o servidor de desenvolvimento
npm run dev
```
Acesse no navegador: `http://localhost:3000`

### 2. Versão em Linha de Comando (Python)
```bash
python3 calculadora.py
# ou no Windows:
python calculadora.py
```

### 3. Versão Estática Pura (Sem frameworks)
Dê dois cliques no arquivo `calculadora.html` ou abra-o em qualquer navegador web.

---

## 📤 Como Enviar para o seu GitHub

```bash
# 1. Inicialize o repositório Git
git init

# 2. Adicione todos os arquivos
git add .

# 3. Crie o primeiro commit
git commit -m "feat: calculadora completa com operações básicas, porcentagem, raiz e quadrado"

# 4. Defina a branch principal como main
git branch -M main

# 5. Conecte ao seu repositório no GitHub (substitua a URL)
git remote add origin https://github.com/SEU-USUARIO/calculadora.git

# 6. Envie o código
git push -u origin main
```

---

## 📄 Licença

Distribuído sob a licença [MIT](LICENSE).
