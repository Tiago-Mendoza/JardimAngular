import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Buques } from './pages/buques/buques';
import { Arranjos } from './pages/arranjos/arranjos';
import { Presentes } from './pages/presentes/presentes';
import { Cart } from './pages/cart/cart';
import { AdminLogin } from './pages/admin-login/admin-login';
import { Cadastro } from './pages/cadastro/cadastro';
import { Admin } from './pages/admin/admin';
import { ProdutoLista } from './pages/produto-lista/produto-lista';
import { ProdutoForm } from './pages/produto-form/produto-form';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/buques',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: Home,
    title: 'Jardim Encantado - Floricultura Online'
  },
  {
    path: 'buques',
    component: Buques,
    title: 'Buquês Exclusivos - Jardim Encantado'
  },
  {
    path: 'arranjos',
    component: Arranjos,
    title: 'Arranjos Florais - Jardim Encantado'
  },
  {
    path: 'presentes',
    component: Presentes,
    title: 'Presentes Especiais - Jardim Encantado'
  },
  {
    path: 'cart',
    component: Cart,
    title: 'Carrinho - Jardim Encantado'
  },
  {
    path: 'admin-login',
    component: AdminLogin,
    title: 'Login - Jardim Encantado'
  },
  {
    path: 'cadastro',
    component: Cadastro,
    title: 'Cadastro - Jardim Encantado'
  },
  {
    path: 'admin',
    component: Admin,
    title: 'Painel Administrativo - Jardim Encantado'
  },
  {
    path: 'produtos',
    component: ProdutoLista,
    title: 'Gerenciamento de Produtos - Jardim Encantado'
  },
  {
    path: 'produto-form',
    component: ProdutoForm,
    title: 'Cadastro de Produto - Jardim Encantado'
  },
  {
    path: 'produto-form/:id',
    component: ProdutoForm,
    title: 'Edição de Produto - Jardim Encantado'
  },
  {
    path: '**',
    redirectTo: '/buques'
  }
];
