import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BidsService {

  constructor() {}

 addBid(product: any, bidAmount: number) {
  const bidItems = this.getBids();
  const exists = bidItems.find((p: any) => p.id === product.id);
  
  if (!exists) {
    bidItems.push({
      id: product.id,
      title: product.title,
      image: product.image,
      myBid: bidAmount,
      bidDate: new Date()
    });
  } else {
    exists.myBid = bidAmount;
    exists.bidDate = new Date();
  }

  localStorage.setItem('bidItems', JSON.stringify(bidItems));

  const products = JSON.parse(localStorage.getItem('products') || '[]');
  const pro = products.find((p: any) => p.id === product.id);

  if (pro) {
    pro.currentBid = bidAmount;
    localStorage.setItem('products', JSON.stringify(products));
  }
}
  getBids() {
    return JSON.parse(localStorage.getItem('bidItems') || '[]');
  }
}
