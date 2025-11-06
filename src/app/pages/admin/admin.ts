import { Component, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Aqui a gente define como é um produto - tipo um molde
// Precisa ter: id, nome, preço, descrição, imagem e categoria
interface Produto {
  id: number;
  nome: string;
  preco: number;
  descricao: string;
  imagem: string; // AQUI É ONDE A GENTE GUARDA O CAMINHO DA IMAGEM!
  categoria: 'buques' | 'arranjos' | 'presentes';
}

@Component({
  selector: 'app-admin',
  imports: [FormsModule, CommonModule],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin implements OnInit {
  // Qual aba está aberta (buquês, arranjos ou presentes)
  abaAtiva: 'buques' | 'arranjos' | 'presentes' = 'buques';
  
  // Lista de todos os produtos - usa signal pra atualizar quando mudar
  produtos = signal<Produto[]>([]);
  
  // Os dados que você digita no formulário pra adicionar produto novo
  novoProduto = {
    nome: '',
    preco: 0,
    descricao: '',
    nomeImagem: '', // AQUI É ONDE VOCÊ DIGITA O NOME DA IMAGEM (ex: buque-01.jpg)
    categoria: 'buques' as 'buques' | 'arranjos' | 'presentes'
  };

  constructor(private router: Router) {}

  // Função que roda quando a página carrega
  ngOnInit() {
    // Se não estiver logado, manda pra tela de login
    if (!localStorage.getItem('adminLogado')) {
      this.router.navigate(['/admin-login']);
      return;
    }
    // Carrega os produtos que já foram salvos
    this.carregarProdutos();
  }

  // Quando você clica nas abas (Buquês, Arranjos, Presentes)
  mudarAba(aba: 'buques' | 'arranjos' | 'presentes') {
    this.abaAtiva = aba;
    this.novoProduto.categoria = aba;
    this.carregarProdutos();
  }

  // Carrega os produtos do localStorage
  carregarProdutos() {
    const produtosSalvos = localStorage.getItem(`produtos_${this.abaAtiva}`);
    if (produtosSalvos) {
      this.produtos.set(JSON.parse(produtosSalvos));
    } else {
      this.produtos.set([]);
    }
  }

  // AQUI É ONDE A GENTE MONTA O CAMINHO COMPLETO DA IMAGEM!
  // Pega o nome da imagem que você digitou e monta o caminho completo
  // Exemplo: se você digitar "buque-01.jpg" na aba Buquês, vira "assets/img/buques/buque-01.jpg"
  montarCaminhoImagem(nomeImagem: string): string {
    if (!nomeImagem) return '';
    // Monta o caminho: assets/img + nome da pasta (buques/arranjos/presentes) + nome da imagem
    return `assets/img/${this.abaAtiva}/${nomeImagem}`;
  }

  // Função chama quando você clica em "Adicionar Produto"
  adicionarProduto() {
    // AQUI É ONDE A GENTE INSERE A IMAGEM!
    // Pega o nome da imagem que você digitou e monta o caminho completo
    const caminhoImagem = this.montarCaminhoImagem(this.novoProduto.nomeImagem);
    
    // Cria o produto novo com todos os dados
    const produto: Produto = {
      id: Date.now(), // ID único baseado no tempo
      nome: this.novoProduto.nome,
      preco: parseFloat(this.novoProduto.preco.toString()),
      descricao: this.novoProduto.descricao,
      imagem: caminhoImagem, // AQUI SALVA O CAMINHO COMPLETO DA IMAGEM!
      categoria: this.abaAtiva
    };

    // Adiciona na lista de produtos
    const produtosAtuais = [...this.produtos()];
    produtosAtuais.push(produto);
    this.produtos.set(produtosAtuais);

    // Salva no localStorage pra não perder quando fechar
    localStorage.setItem(`produtos_${this.abaAtiva}`, JSON.stringify(produtosAtuais));

    // Limpa o formulário pra adicionar outro produto
    this.novoProduto = {
      nome: '',
      preco: 0,
      descricao: '',
      nomeImagem: '',
      categoria: this.abaAtiva
    };
  }

  // Função chamada quando você clica em "Deletar"
  deletarProduto(id: number) {
    if (confirm('Tem certeza que deseja deletar este produto?')) {
      // Remove o produto da lista
      const produtosAtuais = this.produtos().filter(p => p.id !== id);
      this.produtos.set(produtosAtuais);
      
      // Atualiza o localStorage
      localStorage.setItem(`produtos_${this.abaAtiva}`, JSON.stringify(produtosAtuais));
    }
  }

  // Função chamada quando você clica em "Sair"
  sair() {
    localStorage.removeItem('adminLogado');
    this.router.navigate(['/admin-login']);
  }
}
