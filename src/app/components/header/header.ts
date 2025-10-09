import { Component, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements AfterViewInit {
  private mobileMenu: HTMLElement | null = null;
  private menuClose: HTMLElement | null = null;
  private menuLinks: NodeListOf<Element> | null = null;

  ngAfterViewInit(): void {
    this.initializeMobileMenu();
  }

  private initializeMobileMenu(): void {
    this.mobileMenu = document.getElementById('mobileMenu');
    this.menuClose = document.getElementById('menuClose');
    this.menuLinks = document.querySelectorAll('.mobile-menu-nav a');

    if (!this.mobileMenu || !this.menuClose) {
      console.warn('Mobile menu elements not found');
      return;
    }

    // Close menu button
    this.menuClose.addEventListener('click', () => this.closeMobileMenu());

    // Close menu when clicking outside
    this.mobileMenu.addEventListener('click', (e) => {
      if (e.target === this.mobileMenu) {
        this.closeMobileMenu();
      }
    });

    // Close menu after navigation
    this.menuLinks?.forEach((link) => {
      link.addEventListener('click', () => this.closeMobileMenu());
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeMobileMenu();
      }
    });
  }

  openMobileMenu(): void {
    if (this.mobileMenu) {
      this.mobileMenu.classList.add('active');
    }
  }

  private closeMobileMenu(): void {
    if (this.mobileMenu) {
      this.mobileMenu.classList.remove('active');
    }
  }
}
