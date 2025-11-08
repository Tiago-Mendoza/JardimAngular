// Interface que define a estrutura de um Produto
export interface Produto {
  id?: number;
  nome: string;
  preco: number;
  descricao: string;
  imagem: string;
  categoria: 'buques' | 'arranjos' | 'presentes';
}

// Interface que define a estrutura de uma Pessoa (caso precise)
export interface Pessoa {
  id?: number;
  nome: string;
  sobrenome: string;
  dtNascimento: string;
}

