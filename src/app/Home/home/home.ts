import { Component } from '@angular/core';
import { LandingBanner } from '../../components/landing-banner/landing-banner';
import { AboutArea } from '../../components/about-area/about-area';
import { Sessions } from '../../components/sessions/sessions';
import { SessionTimes } from '../../components/session-times/session-times';
import { Faqs } from '../../components/faqs/faqs';
import { Testimonials } from '../../components/testimonials/testimonials';
import { OurTeam } from '../../our-team/our-team';

@Component({
  selector: 'app-home',
  imports: [LandingBanner, AboutArea, Sessions, SessionTimes, Faqs, Testimonials, OurTeam],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
