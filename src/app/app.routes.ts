import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LiveAuctionsComponent } from './pages/live-auctions/live-auctions.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'live-auctions', component: LiveAuctionsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'register', component: RegisterComponent},
  { path:'product-details', component:ProductDetailsComponent}

];
