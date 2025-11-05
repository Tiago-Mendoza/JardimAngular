import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ProdutoArranjo {
  id: number;
  nome: string;
  precoOriginal: number;
  precoAtual: number;
  desconto?: number;
  imagem: string;
}

@Component({
  selector: 'app-arranjos',
  imports: [CommonModule],
  templateUrl: './arranjos.html',
  styleUrl: './arranjos.css',
})
export class Arranjos implements OnInit {
  todosArranjos = signal<ProdutoArranjo[]>([]);

  ngOnInit() {
    this.carregarProdutos();
  }

  carregarProdutos() {
    // Verifica se há produtos salvos no localStorage
    const produtosSalvos = localStorage.getItem('produtos_arranjos');
    
    if (produtosSalvos) {
      const produtos = JSON.parse(produtosSalvos);
      const arranjos: ProdutoArranjo[] = produtos.map((p: any, index: number) => ({
        id: p.id || index + 1,
        nome: p.nome,
        precoOriginal: p.precoOriginal || p.preco,
        precoAtual: p.precoAtual || p.preco,
        desconto: p.desconto,
        imagem: p.imagem
      }));
      
      this.todosArranjos.set(arranjos);
    } else {
      // Inicializa com produtos padrão baseados nas imagens
      this.inicializarProdutosPadrao();
    }
  }

  inicializarProdutosPadrao() {
    const arranjos: ProdutoArranjo[] = [
      {
        id: 1,
        nome: 'Centro de Mesa Botânico',
        precoOriginal: 53.00,
        precoAtual: 34.45,
        desconto: 35,
        imagem: 'assets/img/arranjos/arranjo-01.jpg'
      },
      {
        id: 2,
        nome: 'Elegância de Sala',
        precoOriginal: 56.00,
        precoAtual: 39.20,
        desconto: 30,
        imagem: 'assets/img/arranjos/arranjo-02.jpg'
      },
      {
        id: 3,
        nome: 'Verde & Dourado',
        precoOriginal: 59.00,
        precoAtual: 59.00,
        imagem: 'assets/img/arranjos/arranjo-03.jpg'
      },
      {
        id: 4,
        nome: 'Clássico de Vidro',
        precoOriginal: 62.00,
        precoAtual: 49.60,
        desconto: 20,
        imagem: 'assets/img/arranjos/arranjo-04.jpg'
      },
      {
        id: 5,
        nome: 'Minimalista Nórdico',
        precoOriginal: 65.00,
        precoAtual: 39.00,
        desconto: 40,
        imagem: 'assets/img/arranjos/arranjo-05.jpg'
      },
      {
        id: 6,
        nome: 'Campo em Casa',
        precoOriginal: 68.00,
        precoAtual: 68.00,
        imagem: 'assets/img/arranjos/arranjo-06.jpg'
      },
      {
        id: 7,
        nome: 'Primavera na Mesa',
        precoOriginal: 71.00,
        precoAtual: 49.70,
        desconto: 30,
        imagem: 'assets/img/arranjos/arranjo-07.jpg'
      },
      {
        id: 8,
        nome: 'Luxo Tropical',
        precoOriginal: 74.00,
        precoAtual: 55.50,
        desconto: 25,
        imagem: 'assets/img/arranjos/arranjo-08.jpg'
      },
      {
        id: 9,
        nome: 'Harmonia Natural',
        precoOriginal: 77.00,
        precoAtual: 61.60,
        desconto: 20,
        imagem: 'assets/img/arranjos/arranjo-09.jpg'
      },
      {
        id: 10,
        nome: 'Essência Rústica',
        precoOriginal: 80.00,
        precoAtual: 80.00,
        imagem: 'assets/img/arranjos/arranjo-10.jpg'
      }
    ];

    this.todosArranjos.set(arranjos);
  }

  comprar(arranjo: ProdutoArranjo) {
    // TODO: Implementar lógica de adicionar ao carrinho
    console.log('Comprar:', arranjo);
  }
}
