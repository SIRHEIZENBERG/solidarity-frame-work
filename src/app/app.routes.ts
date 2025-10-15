import { Routes } from '@angular/router';
import { Home } from './Home/home/home';
import { AboutUsPage } from './components/about-us-page/about-us-page';
import { ContactUs } from './components/contact-us/contact-us';
import { OurTeam } from './our-team/our-team';
import { Performance } from './components/performance/performance';
export const routes: Routes = [
  // Redirect empty path to 'home'
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  // Home route
  { path: 'home', component: Home },

  { path: 'about-us', component: AboutUsPage },

  { path: 'contact-us', component: ContactUs },

  { path: 'our-team', component: OurTeam },

  { path: 'performance', component: Performance },
  // Optional: wildcard route for 404
  { path: '**', redirectTo: 'home' },
];
