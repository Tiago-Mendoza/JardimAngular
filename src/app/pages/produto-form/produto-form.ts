import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProdutoService } from '../../core/services/produto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../../core/services/types/types';

@Component({
  selector: 'app-produto-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './produto-form.html',
  styleUrl: './produto-form.css'
})
export class ProdutoForm {
  titulo = 'Cadastro de Produtos';
  produtoId?: string | number;
  
  // Defino um objeto produto que será incluído ou alterado
  produto: Produto = {
    nome: '',
    preco: 0,
    descricao: '',
    imagem: '',
    categoria: 'buques'
  };

  constructor(
    private service: ProdutoService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    // Verifica se o admin está logado
    if (!localStorage.getItem('adminLogado')) {
      this.router.navigate(['/admin-login']);
      return;
    }

    // Verifico se é alteração ou inclusão
    this.produtoId = Number(this.route.snapshot.params['id']);
    if (this.produtoId) {
      this.titulo = 'Edição de Produto';
      service.buscarPorId(this.produtoId).subscribe(produto => {
        if (produto) {
          this.produto = produto;
        }
      });
    }
  }

  submeter() {
    if (this.produtoId) {
      // Edição
      this.service.editar(this.produto).subscribe(() => {
        alert('Produto editado com sucesso!');
        this.router.navigate(['/produtos']);
      });
    } else {
      // Inclusão - gera ID aleatório
      this.produto.id = this.gerarIdAleatorio();
      this.service.incluir(this.produto).subscribe(() => {
        alert('Produto cadastrado com sucesso!');
        this.router.navigate(['/produtos']);
      });
    }
  }

  // Gera um ID aleatório de 4 caracteres hexadecimais
  gerarIdAleatorio(): string {
    return Math.random().toString(16).substring(2, 6);
  }

  cancelar() {
    this.router.navigate(['/produtos']);
  }
}

