export interface Produto {
  id?: string | number;
  nome: string;
  preco: number;
  descricao: string;
  imagem: string;
  categoria: 'buques' | 'arranjos' | 'presentes';
}

export interface Pessoa {
  id?: number;
  nome: string;
  sobrenome: string;
  dtNascimento: string;
}
