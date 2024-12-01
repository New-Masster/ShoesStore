# ShoesStore

**ShoesStore** é uma aplicação web de loja de sapatos desenvolvida em **Django**. Este projeto foi criado como parte da nota da 1ª AV (Avaliação) e como parte da nota da 2ª AV, tem como objetivo fornecer uma plataforma simples para gerenciar e exibir produtos relacionados a calçados.

## Funcionalidades

- **Autenticação de Usuários**: Permite que os usuários façam login e logout.
- **Gerenciamento de Produtos**: Exibição de marcas, categorias e sapatos disponíveis na loja.
- **Interface Responsiva**: A aplicação é projetada para ser acessível em dispositivos móveis e tablets, garantindo uma experiência de usuário fluida.

## Tecnologias Utilizadas

- **Frontend**: React com TypeScript
- **Backend**: Django
- **Banco de Dados**: SQLite (ou outro banco de dados configurado)
- **Estilos**: Tailwind CSS

## Estrutura do Projeto

```plaintext
ShoesStore/
├── src/
│   ├── components/
│   │   ├── Brands.tsx
│   │   ├── Categories.tsx
│   │   └── Shoes.tsx
│   ├── App.tsx
│   └── main.tsx
├── backend/  # Contém o código do Django
├── .gitignore
├── README.md
└── package.json
