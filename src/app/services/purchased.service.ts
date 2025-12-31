import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PurchasedService {

  private storageKet = 'purchasedItems';

  getPurchased(){
    return JSON.parse(localStorage.getItem(this.storageKet) ||'[]');
  }

  addPurchased(product:any){
    const items=this.getPurchased();

    const exists=items.find((p:any) =>p.id ===product.id);
    if(exists) return;

    items.push({
      id:product.id,
      title:product.title,
      image:product.image,
      finalPrice:product.currentBid ??product.buyNow,
      puchasedAt:new Date()
    });
    localStorage.setItem(this.storageKet,JSON.stringify(items));
  }
}
