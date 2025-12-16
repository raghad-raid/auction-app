import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuctionService } from '../../services/auction.service';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
product:any;

constructor(private route:ActivatedRoute,
    private auctionService:AuctionService){}

ngOnInit(): void {
   const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.auctionService.getProductById(id);
  }
}

