import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from './types/types';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  // URL da API simulada (json-server)
  private apiUrl = 'http://localhost:3000/produtos';

  constructor(private http: HttpClient) {}

  // Lista todos os produtos
  listar(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.apiUrl);
  }

  // Busca um produto por ID
  buscarPorId(id: string | number): Observable<Produto> {
    return this.http.get<Produto>(`${this.apiUrl}/${id}`);
  }

  // Inclui um novo produto
  incluir(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.apiUrl, produto);
  }

  // Edita um produto existente
  editar(produto: Produto): Observable<Produto> {
    return this.http.put<Produto>(`${this.apiUrl}/${produto.id}`, produto);
  }

  // Exclui um produto
  excluir(id: string | number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

