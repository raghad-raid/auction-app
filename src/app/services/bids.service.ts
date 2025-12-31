import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BidsService {

  constructor() {}

  addBid(product: any, bidAmount: number) {

    product.currentBid = Number(product.currentBid) || 0;
    bidAmount = Number(bidAmount);

    product.currentBid += bidAmount;

    const bidItems = this.getBids();
    const exists = bidItems.find( (p: { id: any; }) => p.id === product.id);

    if (!exists) {
      bidItems.push({
        id: product.id,
        title: product.title,
        image: product.image,
        myBid: bidAmount,
        totalAfterBid: product.currentBid,
        bidDate: new Date()
      });
    } else {
      exists.myBid += bidAmount;
      exists.totalAfterBid = product.currentBid; 
      exists.bidDate = new Date();
    }

    localStorage.setItem('bidItems', JSON.stringify(bidItems));

    const currentBids = JSON.parse(localStorage.getItem('currentBids') || '{}');
    currentBids[product.id] = product.currentBid;
    localStorage.setItem('currentBids', JSON.stringify(currentBids));
  }

  getBids() {
    return JSON.parse(localStorage.getItem('bidItems') || '[]');
  }
}
