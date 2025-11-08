# 📦 Sistema de Gerenciamento de Produtos - CRUD

## 🚀 Como Usar

### 1. Iniciar o JSON Server (API Simulada)

Primeiro, você precisa iniciar o json-server para simular a API REST:

```bash
npm run api
```

Isso vai iniciar a API em `http://localhost:3000`

### 2. Iniciar o Angular

Em outro terminal, na pasta raiz do projeto:

```bash
npm start
```

ou

```bash
ng serve
```

### 3. Fazer Login como Admin

1. Acesse: `http://localhost:4200/admin-login`
2. Digite:
   - **Email**: `admin`
   - **Senha**: `123456`
3. Clique em "Entrar"
4. Você será redirecionado automaticamente para a tela de gerenciamento de produtos

## 📋 Funcionalidades

### Listar Produtos
- Acesse: `http://localhost:4200/produtos`
- Mostra uma tabela com todos os produtos cadastrados
- Botões para editar e excluir cada produto
- Botão "Incluir" para cadastrar novo produto

### Cadastrar Produto
- Clique no botão "Incluir" na lista de produtos
- Ou acesse: `http://localhost:4200/produto-form`
- Preencha os campos:
  - **Nome**: Nome do produto
  - **Preço**: Valor em reais (ex: 89.90)
  - **Descrição**: Descrição detalhada
  - **Imagem**: Caminho da imagem (ex: `assets/img/buques/buque-01.jpg`)
  - **Categoria**: Escolha entre Buquês, Arranjos ou Presentes
- Clique em "Cadastrar"

### Editar Produto
- Na lista de produtos, clique no botão "Editar" do produto desejado
- Altere os campos necessários
- Clique em "Cadastrar" para salvar

### Excluir Produto
- Na lista de produtos, clique no botão "Excluir"
- Confirme a exclusão

## 🗂️ Estrutura dos Arquivos Criados

```
src/app/
├── core/
│   └── services/
│       ├── produto.service.ts      # Serviço com métodos CRUD
│       └── types/
│           └── types.ts            # Interfaces TypeScript
├── pages/
│   ├── produto-lista/
│   │   ├── produto-lista.ts        # Lógica da listagem
│   │   ├── produto-lista.html      # Template da tabela
│   │   └── produto-lista.css       # Estilos da tabela
│   └── produto-form/
│       ├── produto-form.ts         # Lógica do formulário
│       ├── produto-form.html       # Template do formulário
│       └── produto-form.css        # Estilos do formulário
```

## 🎯 Rotas Disponíveis

- `/produtos` - Lista todos os produtos
- `/produto-form` - Formulário de cadastro
- `/produto-form/:id` - Formulário de edição (onde :id é o ID do produto)

## 💾 Como os Dados são Salvos

Todos os produtos cadastrados são salvos automaticamente no arquivo `backend/db.json`.

O json-server cria uma API REST completa:
- `GET http://localhost:3000/produtos` - Lista todos
- `GET http://localhost:3000/produtos/:id` - Busca por ID
- `POST http://localhost:3000/produtos` - Cria novo
- `PUT http://localhost:3000/produtos/:id` - Atualiza
- `DELETE http://localhost:3000/produtos/:id` - Exclui

## ✨ Exemplo de Produto no db.json

```json
{
  "id": 1,
  "nome": "Buque de Rosas Vermelhas",
  "preco": 89.90,
  "descricao": "Buque lindo com 12 rosas vermelhas",
  "imagem": "assets/img/buques/Buque-01.jpg",
  "categoria": "buques"
}
```

## 📝 Observações

- O ID é gerado automaticamente pelo json-server
- As imagens devem estar na pasta `src/assets/img/`
- As categorias disponíveis são: `buques`, `arranjos`, `presentes`
- Todos os campos são obrigatórios

