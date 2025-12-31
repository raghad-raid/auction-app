import { Injectable } from "@angular/core";
@Injectable({
  providedIn: 'root'
})
export class SavedService {

  private savedItems: any[] = [];

  constructor() {
    const stored = localStorage.getItem('savedItems');
    this.savedItems = stored ? JSON.parse(stored) : [];
  }

  getSavedItems() {
    return this.savedItems;
  }

  getSavedCount() {
    return this.savedItems.length;
  }

  isSaved(productId: number | string) {
    return this.savedItems.some(p => p.id === productId);
  }

  toggleSave(product: any) {
    const index = this.savedItems.findIndex(p => p.id === product.id);

    if (index > -1) {
      this.savedItems.splice(index, 1);
    } else {
      this.savedItems.push(product);
    }

    this.sync();
  }

  private sync() {
    localStorage.setItem('savedItems', JSON.stringify(this.savedItems));
  }

  
}
