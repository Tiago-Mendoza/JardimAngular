import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ProdutoPresente {
  id: number;
  nome: string;
  precoOriginal: number;
  precoAtual: number;
  desconto?: number;
  imagem: string;
}

@Component({
  selector: 'app-presentes',
  imports: [CommonModule],
  templateUrl: './presentes.html',
  styleUrl: './presentes.css',
})
export class Presentes implements OnInit {
  todosPresentes = signal<ProdutoPresente[]>([]);

  ngOnInit() {
    this.carregarProdutos();
  }

  carregarProdutos() {
    // Sempre inicia com os produtos padrão
    const produtosPadrao = this.obterProdutosPadrao();
    
    // Verifica se há produtos salvos no localStorage
    const produtosSalvos = localStorage.getItem('produtos_presentes');
    
    if (produtosSalvos && produtosSalvos !== '[]' && produtosSalvos !== 'null') {
      try {
        const produtosAdicionados = JSON.parse(produtosSalvos);
        if (Array.isArray(produtosAdicionados) && produtosAdicionados.length > 0) {
          // Converte produtos adicionados para o formato ProdutoPresente
          const presentesAdicionados: ProdutoPresente[] = produtosAdicionados.map((p: any, index: number) => ({
            id: p.id || Date.now() + index,
            nome: p.nome,
            precoOriginal: p.precoOriginal || p.preco,
            precoAtual: p.precoAtual || p.preco,
            desconto: p.desconto,
            imagem: p.imagem
          }));
          
          // Mescla produtos padrão com produtos adicionados
          const todosProdutos = [...produtosPadrao, ...presentesAdicionados];
          this.todosPresentes.set(todosProdutos);
          return;
        }
      } catch (error) {
        console.error('Erro ao carregar produtos do localStorage:', error);
      }
    }
    
    // Se não houver produtos salvos, mostra apenas os produtos padrão
    this.todosPresentes.set(produtosPadrao);
  }

  obterProdutosPadrao(): ProdutoPresente[] {
    return [
      {
        id: 1,
        nome: 'Kit Bem-Estar',
        precoOriginal: 53.00,
        precoAtual: 34.45,
        desconto: 35,
        imagem: 'assets/img/presentes/presente-01.jpg'
      },
      {
        id: 2,
        nome: 'Delícias de Chocolate',
        precoOriginal: 56.00,
        precoAtual: 39.20,
        desconto: 30,
        imagem: 'assets/img/presentes/presente-02.jpg'
      },
      {
        id: 3,
        nome: 'Café da Manhã Feliz',
        precoOriginal: 59.00,
        precoAtual: 59.00,
        imagem: 'assets/img/presentes/presente-03.jpg'
      },
      {
        id: 4,
        nome: 'Combo Spa em Casa',
        precoOriginal: 62.00,
        precoAtual: 49.60,
        desconto: 20,
        imagem: 'assets/img/presentes/presente-04.jpg'
      },
      {
        id: 5,
        nome: 'Vela Aromática Premium',
        precoOriginal: 65.00,
        precoAtual: 39.00,
        desconto: 40,
        imagem: 'assets/img/presentes/presente-05.jpg'
      },
      {
        id: 6,
        nome: 'Cesta Doçura',
        precoOriginal: 68.00,
        precoAtual: 68.00,
        imagem: 'assets/img/presentes/presente-06.jpg'
      },
      {
        id: 7,
        nome: 'Chá & Carinho',
        precoOriginal: 71.00,
        precoAtual: 49.70,
        desconto: 30,
        imagem: 'assets/img/presentes/presente-07.jpg'
      },
      {
        id: 8,
        nome: 'Vinho & Flores',
        precoOriginal: 74.00,
        precoAtual: 55.50,
        desconto: 25,
        imagem: 'assets/img/presentes/presente-08.jpg'
      },
      {
        id: 9,
        nome: 'Romance em Cesta',
        precoOriginal: 77.00,
        precoAtual: 61.60,
        desconto: 20,
        imagem: 'assets/img/presentes/presente-09.jpg'
      },
      {
        id: 10,
        nome: 'Surpresa Especial',
        precoOriginal: 80.00,
        precoAtual: 80.00,
        imagem: 'assets/img/presentes/presente-10.jpg'
      }
    ];
  }

  comprar(presente: ProdutoPresente) {
    // TODO: Implementar lógica de adicionar ao carrinho
    console.log('Comprar:', presente);
  }
}
