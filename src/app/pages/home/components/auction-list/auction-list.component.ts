import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuctionService } from '../../../../services/auction.service';
import { SavedService } from '../../../../services/saved.service';

@Component({
  selector: 'app-auction-list',
  imports: [CommonModule],
  templateUrl: './auction-list.component.html',
  styleUrl: './auction-list.component.css'
})
export class AuctionListComponent implements OnInit {
items:any[]=[];

ngOnInit(): void {
 this.items = this.auctionService.getByType('auction');
  }
   constructor(private router: Router,
    private auctionService:AuctionService,
    private savedService :SavedService) {}

    goToDetails(item: any) {
      this.router.navigate(['/product-details', item.id]);
  }

  toggleLike(product: any) {
  this.savedService.toggleSave(product);
}

isLiked(product: any) {
  return this.savedService.isSaved(product.id);
}
}
