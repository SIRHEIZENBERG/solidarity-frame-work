import { Routes } from '@angular/router';
import { Home } from './Home/home/home';
import { AboutUsPage } from './components/about-us-page/about-us-page';
import { ContactUs } from './components/contact-us/contact-us';
import { OurTeam } from './our-team/our-team';

export const routes: Routes = [
  // Redirect empty path to 'home'
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  // Home route
  { path: 'home', component: Home },

  { path: 'about-us', component: AboutUsPage },

  { path: 'contact-us', component: ContactUs },

  { path: 'our-team', component: OurTeam },

  // Optional: wildcard route for 404
  { path: '**', redirectTo: 'home' },
];
