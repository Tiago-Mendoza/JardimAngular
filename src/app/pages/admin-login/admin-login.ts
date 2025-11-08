import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PessoaService } from '../../core/services/pessoa.service';

@Component({
  selector: 'app-admin-login',
  imports: [RouterLink, FormsModule],
  templateUrl: './admin-login.html',
  styleUrl: './admin-login.css',
})
export class AdminLogin {
  email = '';
  senha = '';

  constructor(
    private router: Router,
    private pessoaService: PessoaService
  ) {}

  fazerLogin() {
    // Tenta fazer login como admin
    if (this.pessoaService.loginAdmin(this.email, this.senha)) {
      this.router.navigate(['/produtos']);
      return;
    }

    // Tenta fazer login como cliente
    if (this.pessoaService.loginCliente(this.email, this.senha)) {
      this.router.navigate(['/home']);
      return;
    }

    // Se não conseguiu fazer login
    alert('E-mail ou senha incorretos!');
  }
}
