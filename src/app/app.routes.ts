import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Buques } from './pages/buques/buques';
import { Arranjos } from './pages/arranjos/arranjos';
import { Presentes } from './pages/presentes/presentes';
import { Cart } from './pages/cart/cart';
import { AdminLogin } from './pages/admin-login/admin-login';

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
    path: '**',
    redirectTo: '/buques'
  }
];
