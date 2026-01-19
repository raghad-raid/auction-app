import { Component } from '@angular/core';
import { AuctionService } from '../../services/auction.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  imports:[CommonModule,FormsModule],
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  imageBase64 = '';
  images: string[] = [];
  success=false;
  loading=false;

  constructor(
    private auctionService: AuctionService,
    private router: Router
  ) {}

  onImageChange(event: any) {
    const files = event.target.files;
    this.images=[];

    for(let file of files){
      const reader=new FileReader();
      reader.onload=()=>{
        this.images.push(reader.result as string );
      };
      reader.readAsDataURL(file);
    }
  }

  addProduct(form: any) {
  if (form.invalid || this.images.length === 0) return;

  this.loading = true;

  const newProduct = {
    id: Date.now(),
    ...form.value,
    image: this.images[0],
    images: this.images,
    type: 'live',
    bids: 0,
    views: 0,
    location: form.value.location,
    startingBid: Number(form.value.startingBid),
    currentBid: 0,
    buyNow: Number(form.value.buyNow),
    timeLeft: '1d 0h',
    seller: 'Current User',
  };

  this.auctionService.addProduct(newProduct);

  setTimeout(() => {
    this.loading = false;

    this.router.navigate(['/product-details', newProduct.id]);
     form.reset();
     this.images = [];
  }, 2000);
}


}
