```markdown
# Projeto ONG Vida e Esperança (Entrega III - Interatividade)

![Status do Projeto](https://img.shields.io/badge/Status-Funcional-green)

Este repositório documenta a **Entrega III** do projeto "ONG Vida e Esperança", com foco na implementação de JavaScript avançado para criar uma experiência de usuário dinâmica e interativa.

A interface estática foi transformada em uma aplicação web funcional, demonstrando domínio de manipulação do DOM, gerenciamento de eventos, armazenamento local e validação de dados.

---

## 🚀 Acesso ao Projeto

O site está publicado e pode ser acessado através do GitHub Pages:

**[https://monica-1985.github.io/mvidaeesperanca/](https://monica-1985.github.io/mvidaeesperanca/)**

---

## 🛠️ Tecnologias Utilizadas

* **HTML5 Semântico**
* **Tailwind CSS** (para estilização)
* **JavaScript (ES6+)** (foco principal desta entrega)

---

## 🗂️ Estrutura de Pastas (Código Modular)

Conforme o requisito de organização, o projeto segue uma estrutura de pastas clara, separando as responsabilidades:

```

/
├── index.html
├── projetos.html
├── cadastro.html
├── js/
│   └── main.js         (Script de interatividade global)
│   └── (outros módulos...)
├── css/
│   └── (arquivos CSS, se aplicável)
└── imagens/
└── (imagens do projeto)

```

O código JavaScript (`main.js`) está organizado por funcionalidade (Menu Mobile, Dark Mode, Máscaras de Formulário) para facilitar a manutenção.

---

## ✅ Conformidade com os Requisitos da Entrega

### 1. Manipulação do DOM e Eventos

Demonstramos manipulação avançada do DOM e gerenciamento de eventos nas seguintes funcionalidades:

* **Menu Mobile:** Um script controla o evento de `click` no botão "hambúrguer", alternando classes CSS (`hidden`) para exibir ou esconder o menu mobile. O estado do menu é gerenciado via `aria-expanded` para acessibilidade.
* **Modo Escuro (Dark Mode):** O script responde ao `click` no botão de tema. Ele manipula o DOM adicionando ou removendo a classe `dark` do elemento `<html>`, permitindo que o Tailwind CSS aplique o tema.
* **Gerenciamento de Estado (LocalStorage):** O Modo Escuro utiliza `localStorage.setItem()` e `localStorage.getItem()` para salvar a preferência do usuário (claro ou escuro), garantindo que a escolha persista entre as visitas.

### 2. Funcionalidade Obrigatória: Validação de Formulário

O requisito de "verificação de consistência de dados em formulários" foi implementado na página `cadastro.html`.

* **Máscaras de Input Acessíveis:** Scripts JavaScript foram usados para criar máscaras de formato para os campos **CPF**, **CEP** e **Telefone**.
* **Aviso ao Usuário:** As máscaras guiam o usuário para o preenchimento correto, garantindo a consistência dos dados antes do envio.
* **Acessibilidade (WCAG):** A validação ocorre no evento `blur` (saída de campo), garantindo que leitores de tela não sejam interrompidos durante a digitação, em conformidade com as boas práticas de acessibilidade.
* **Validação HTML5:** Os campos também utilizam atributos como `required` para garantir que não sejam enviados em branco.
```
