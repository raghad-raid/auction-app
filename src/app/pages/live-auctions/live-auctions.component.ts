import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuctionService } from '../../services/auction.service';
@Component({
  selector: 'app-live-auctions',
  imports: [CommonModule,RouterModule],
  templateUrl: './live-auctions.component.html',
  styleUrl: './live-auctions.component.css'
})
export class LiveAuctionsComponent implements OnInit{

 items:any[]=[]; 
 ngOnInit(): void {
 this.items = this.auctionService.getByType('live');
  }

 constructor(private router: Router,
  private auctionService:AuctionService) {}

 goToDetails(item: any) {
  this.router.navigate(['/product-details', item.id]);
}

}


