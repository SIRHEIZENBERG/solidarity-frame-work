import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing-banner.html',
  styleUrl: './landing-banner.css',
})
export class LandingBanner implements OnInit, OnDestroy {
  currentSlide = 0;
  totalSlides = 3;
  autoplayInterval: any;

  slides = [
    {
      title: 'Welcome to Excellence',
      description:
        'Discover innovative solutions that transform your business and elevate your success to new heights.',
      buttonText: 'Get Started',
      image: 'assets/img/hero/hero-3.jpg',
    },
    {
      title: 'Unleash Your Potential',
      description:
        'Experience cutting-edge technology designed to empower your vision and drive meaningful results.',
      buttonText: 'Learn More',
      image: 'assets/img/hero/hero-3.jpg',
    },
    {
      title: 'Join the Revolution',
      description:
        'Be part of something extraordinary. Together, we create the future of tomorrow, today.',
      buttonText: 'Join Now',
      image: 'assets/img/hero/hero-3.jpg',
    },
  ];

  ngOnInit(): void {
    this.startAutoplay();
    this.addKeyboardNavigation();
  }

  ngOnDestroy(): void {
    this.stopAutoplay();
    document.removeEventListener('keydown', this.handleKeyboard);
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
  }

  prevSlide(): void {
    this.currentSlide = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
  }

  startAutoplay(): void {
    this.autoplayInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  stopAutoplay(): void {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
    }
  }

  onMouseEnter(): void {
    this.stopAutoplay();
  }

  onMouseLeave(): void {
    this.startAutoplay();
  }

  private handleKeyboard = (e: KeyboardEvent): void => {
    if (e.key === 'ArrowLeft') this.prevSlide();
    if (e.key === 'ArrowRight') this.nextSlide();
  };

  private addKeyboardNavigation(): void {
    document.addEventListener('keydown', this.handleKeyboard);
  }

  getTransform(): string {
    return `translateX(-${this.currentSlide * 100}vw)`;
  }
}
