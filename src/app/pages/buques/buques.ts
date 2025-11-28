import { Component, OnInit, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoService } from '../../core/services/produto.service';

interface ProdutoBuque {
  id: number | string;
  nome: string;
  precoOriginal: number;
  precoAtual: number;
  desconto?: number;
  imagem: string;
}

@Component({
  selector: 'app-buques',
  imports: [CommonModule],
  templateUrl: './buques.html',
  styleUrl: './buques.css',
})
export class Buques implements OnInit {
  private produtoService = inject(ProdutoService);
  todosBuques = signal<ProdutoBuque[]>([]);

  ngOnInit() {
    this.carregarProdutos();
  }

  carregarProdutos() {
    const produtosPadrao = this.obterProdutosPadrao();
    
    this.produtoService.listar().subscribe({
      next: (produtos) => {
        const buquesBackend = produtos
          .filter(p => p.categoria === 'buques')
          .map(p => ({
            id: p.id || 0,
            nome: p.nome,
            precoOriginal: p.preco,
            precoAtual: p.preco,
            imagem: p.imagem
          }));
        
        this.todosBuques.set([...produtosPadrao, ...buquesBackend]);
      },
      error: () => {
        this.todosBuques.set(produtosPadrao);
      }
    });
  }

  obterProdutosPadrao(): ProdutoBuque[] {
    return [
      {
        id: 1,
        nome: 'Aurora Rosé',
        precoOriginal: 53.00,
        precoAtual: 34.45,
        desconto: 35,
        imagem: 'assets/img/buques/Buque-01.jpg'
      },
      {
        id: 2,
        nome: 'Jardim da Manhã',
        precoOriginal: 56.00,
        precoAtual: 39.20,
        desconto: 30,
        imagem: 'assets/img/buques/buque-02.jpg'
      },
      {
        id: 3,
        nome: 'Encanto do Campo',
        precoOriginal: 59.00,
        precoAtual: 59.00,
        imagem: 'assets/img/buques/Buque-03.jpg'
      },
      {
        id: 4,
        nome: 'Doce Primavera',
        precoOriginal: 62.00,
        precoAtual: 49.60,
        desconto: 20,
        imagem: 'assets/img/buques/buque-04.jpg'
      },
      {
        id: 5,
        nome: 'Brisa de Lavanda',
        precoOriginal: 65.00,
        precoAtual: 39.00,
        desconto: 40,
        imagem: 'assets/img/buques/buque-05.jpg'
      },
      {
        id: 6,
        nome: 'Amor Perene',
        precoOriginal: 68.00,
        precoAtual: 68.00,
        imagem: 'assets/img/buques/buque-06.jpg'
      },
      {
        id: 7,
        nome: 'Luar de Jasmim',
        precoOriginal: 71.00,
        precoAtual: 49.70,
        desconto: 30,
        imagem: 'assets/img/buques/buque-07.jpg'
      },
      {
        id: 8,
        nome: 'Sol de Outono',
        precoOriginal: 74.00,
        precoAtual: 55.50,
        desconto: 25,
        imagem: 'assets/img/buques/buque-08.jpg'
      },
      {
        id: 9,
        nome: 'Romance Eterno',
        precoOriginal: 58.00,
        precoAtual: 46.40,
        desconto: 20,
        imagem: 'assets/img/buques/buque-09.jpg'
      },
      {
        id: 10,
        nome: 'Harmonia Floral',
        precoOriginal: 61.00,
        precoAtual: 61.00,
        imagem: 'assets/img/buques/buque-10.jpg'
      }
    ];
  }


  comprar(buque: ProdutoBuque) {
    // TODO: Implementar lógica de adicionar ao carrinho
    console.log('Comprar:', buque);
  }
}
