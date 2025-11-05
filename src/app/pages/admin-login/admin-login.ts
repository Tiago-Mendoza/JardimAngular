import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  imports: [RouterLink, FormsModule],
  templateUrl: './admin-login.html',
  styleUrl: './admin-login.css',
})
export class AdminLogin {
  email = '';
  senha = '';

  constructor(private router: Router) {}

  fazerLogin() {
    // Credenciais do admin
    if (this.email === 'admin' && this.senha === '123456') {
      // Salva que está logado
      localStorage.setItem('adminLogado', 'true');
      // Redireciona pra tela de admin
      this.router.navigate(['/admin']);
    } else {
      alert('E-mail ou senha incorretos!');
    }
  }
}
