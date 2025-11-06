import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  
  // aqui é oLogin do cliente
  loginCliente(email: string, senha: string): boolean {
    if (email === 'cliente' && senha === '123456') {
      localStorage.setItem('clienteLogado', 'true');
      localStorage.setItem('clienteEmail', 'cliente');
      return true;
    }
    return false;
  }

  // aqui é o Login do admin
  loginAdmin(email: string, senha: string): boolean {
    if (email === 'admin' && senha === '123456') {
      localStorage.setItem('adminLogado', 'true');
      return true;
    }
    return false;
  }

  // Cadastra cliente e faz login automático
  cadastrarCliente(nome: string, email: string, senha: string): boolean {
    // Salva dados do cliente
    const dadosCliente = {
      nome: nome,
      email: email,
      cadastradoEm: new Date().toISOString()
    };
    localStorage.setItem('dadosCliente', JSON.stringify(dadosCliente));
    
    // Faz login automático
    localStorage.setItem('clienteLogado', 'true');
    localStorage.setItem('clienteEmail', 'cliente');
    
    return true;
  }

  // Verifica se cliente está logado
  isClienteLogado(): boolean {
    return localStorage.getItem('clienteLogado') === 'true';
  }

  // Verifica se admin está logado
  isAdminLogado(): boolean {
    return localStorage.getItem('adminLogado') === 'true';
  }
}

