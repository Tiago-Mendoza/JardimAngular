import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  
  loginCliente(email: string, senha: string): boolean {
    if (email === 'cliente' && senha === '123456') {
      localStorage.setItem('clienteLogado', 'true');
      localStorage.setItem('clienteEmail', 'cliente');
      return true;
    }
    return false;
  }

  loginAdmin(email: string, senha: string): boolean {
    if (email === 'admin' && senha === '123456') {
      localStorage.setItem('adminLogado', 'true');
      return true;
    }
    return false;
  }

  cadastrarCliente(nome: string, email: string, senha: string): boolean {
    const dadosCliente = {
      nome: nome,
      email: email,
      cadastradoEm: new Date().toISOString()
    };
    localStorage.setItem('dadosCliente', JSON.stringify(dadosCliente));
    
    localStorage.setItem('clienteLogado', 'true');
    localStorage.setItem('clienteEmail', 'cliente');
    
    return true;
  }

  isClienteLogado(): boolean {
    return localStorage.getItem('clienteLogado') === 'true';
  }

  isAdminLogado(): boolean {
    return localStorage.getItem('adminLogado') === 'true';
  }
}
