import { Component } from '@angular/core';
import { Testimonials } from '../testimonials/testimonials';

@Component({
  selector: 'app-about-us-page',
  standalone: true,
  imports: [Testimonials],
  templateUrl: './about-us-page.html',
  styleUrl: './about-us-page.css',
})
export class AboutUsPage {}
