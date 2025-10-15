import { Component } from '@angular/core';
import { Testimonials } from '../testimonials/testimonials';
import { BusSchedule } from '../bus-schedule/bus-schedule';

@Component({
  selector: 'app-about-us-page',
  standalone: true,
  imports: [Testimonials, BusSchedule],
  templateUrl: './about-us-page.html',
  styleUrl: './about-us-page.css',
})
export class AboutUsPage {}
