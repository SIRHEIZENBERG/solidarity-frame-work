// testimonials.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  image: string;
  text: string;
  rating: number;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.css',
})
export class Testimonials {
  testimonials: Testimonial[] = [
    {
      name: 'Sarah Martinez',
      role: 'CEO',
      company: 'TechVision Inc',
      image: 'https://i.pravatar.cc/150?img=5',
      text: 'Working with this team has been an absolute game-changer for our business. Their innovative approach and dedication to excellence transformed our entire operation. The results exceeded all our expectations!',
      rating: 5,
    },
    {
      name: 'James Chen',
      role: 'Product Manager',
      company: 'Digital Solutions',
      image: 'https://i.pravatar.cc/150?img=12',
      text: "I've never experienced such professional and efficient service. The attention to detail and commitment to delivering quality results is unmatched. Highly recommend to anyone looking to elevate their business.",
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Director',
      company: 'Growth Labs',
      image: 'https://i.pravatar.cc/150?img=9',
      text: 'Outstanding work from start to finish! The team understood our vision perfectly and brought it to life beyond what we imagined. Our engagement metrics have skyrocketed since partnering with them.',
      rating: 5,
    },
    {
      name: 'Michael Thompson',
      role: 'Founder',
      company: 'Startup Hub',
      image: 'https://i.pravatar.cc/150?img=13',
      text: "The level of expertise and creativity displayed is remarkable. They took our project to heights we didn't think possible. Communication was seamless, and the final product was absolutely stunning.",
      rating: 5,
    },
    {
      name: 'Lisa Patel',
      role: 'Operations Lead',
      company: 'InnovateCo',
      image: 'https://i.pravatar.cc/150?img=20',
      text: 'Incredible experience working with such talented professionals. They listened to our needs, provided valuable insights, and delivered results that transformed our customer experience completely.',
      rating: 5,
    },
    {
      name: 'David Kim',
      role: 'CTO',
      company: 'FutureTech',
      image: 'https://i.pravatar.cc/150?img=14',
      text: 'Technical excellence combined with creative brilliance. The solutions provided were not only cutting-edge but also perfectly aligned with our business goals. A true partnership in every sense.',
      rating: 5,
    },
  ];

  getRatingArray(rating: number): number[] {
    return Array(rating).fill(0);
  }
}
