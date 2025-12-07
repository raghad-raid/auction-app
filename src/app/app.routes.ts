import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LiveAuctionsComponent } from './pages/live-auctions/live-auctions.component';
import { ProfileComponent } from './pages/profile/profile.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'live-auctions', component: LiveAuctionsComponent },
  { path: 'profile', component: ProfileComponent }

];
