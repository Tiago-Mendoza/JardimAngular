import { Component, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit {
  cartCount = signal(0);

  ngOnInit() {
    if (typeof window !== 'undefined') {
      this.setupMobileMenu();
    }
  }

  setupMobileMenu() {
    const hamburger = document.querySelector('.hamburguer');
    const navMenu = document.querySelector('.menu-navegacao');

    hamburger?.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu?.classList.toggle('active');
    });

    document.querySelectorAll('.link-menu').forEach(n => {
      n.addEventListener('click', () => {
        hamburger?.classList.remove('active');
        navMenu?.classList.remove('active');
      });
    });
  }
}
