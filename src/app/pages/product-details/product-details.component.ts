import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
product:any;

constructor(private route:ActivatedRoute){}

ngOnInit(): void {
   this.route.queryParams.subscribe(params => {
      this.product = JSON.parse(params['data']);
    });
}
}

