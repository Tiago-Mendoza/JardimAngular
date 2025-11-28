import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProdutoService } from '../../core/services/produto.service';
import { Produto } from '../../core/services/types/types';

@Component({
  selector: 'app-produto-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './produto-lista.html',
  styleUrl: './produto-lista.css'
})
export class ProdutoLista implements OnInit {
  titulo = 'Gerenciamento de Produtos';
  produtos: Produto[] = [];

  constructor(
    private service: ProdutoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!localStorage.getItem('adminLogado')) {
      this.router.navigate(['/admin-login']);
      return;
    }
    this.carregarProdutos();
  }

  carregarProdutos(): void {
    this.service.listar().subscribe(produtos => {
      this.produtos = produtos;
    });
  }

  editar(id: string | number | undefined): void {
    if (id) {
      this.router.navigate(['/produto-form', id]);
    }
  }

  excluir(id: string | number | undefined): void {
    if (id && confirm('Deseja realmente excluir este produto?')) {
      this.service.excluir(id).subscribe(() => {
        this.carregarProdutos();
      });
    }
  }

  incluir(): void {
    this.router.navigate(['/produto-form']);
  }

  sair(): void {
    localStorage.removeItem('adminLogado');
    this.router.navigate(['/admin-login']);
  }
}
