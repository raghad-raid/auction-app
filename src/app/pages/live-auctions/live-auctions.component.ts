import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-live-auctions',
  imports: [CommonModule],
  templateUrl: './live-auctions.component.html',
  styleUrl: './live-auctions.component.css'
})
export class LiveAuctionsComponent {

  items = [
    { title: 'Vintage Rolex Submariner', price: '$45,000', bids: 67 ,image:"/Rolex.jpg"},
    { title: 'Abstract Modern Art Piece', price: '$12,500', bids: 23,image:"/art.jpg" },
    { title: 'Diamond Engagement Ring', price: '$8,900', bids: 31,image:"/dimond.jpg" },
    { title: '2020 Tesla Model S', price: '$67,000', bids: 80 ,image:"/tesla.jpg"}
  ];
}


