import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PessoaService } from '../../core/services/pessoa.service';

@Component({
  selector: 'app-cadastro',
  imports: [RouterLink, FormsModule],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css',
})
export class Cadastro {
  nome = '';
  email = '';
  senha = '';
  confirmarSenha = '';

  constructor(
    private router: Router,
    private pessoaService: PessoaService
  ) {}

  fazerCadastro() {
    // Valida se as senhas coincidem
    if (this.senha !== this.confirmarSenha) {
      alert('As senhas não coincidem!');
      return;
    }

    // Valida se os campos estão preenchidos
    if (!this.nome || !this.email || !this.senha) {
      alert('Por favor, preencha todos os campos!');
      return;
    }

    // Usa o serviço para cadastrar o cliente
    const sucesso = this.pessoaService.cadastrarCliente(
      this.nome,
      this.email,
      this.senha
    );

    if (sucesso) {
      // Redireciona para a página inicial
      this.router.navigate(['/home']);
    } else {
      alert('Erro ao realizar cadastro. Tente novamente.');
    }
  }
}
