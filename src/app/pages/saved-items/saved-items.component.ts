import { Component, OnInit } from '@angular/core';
import { SavedService } from '../../services/saved.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-saved-items',
  standalone: true, 
  imports: [CommonModule, RouterModule],
  templateUrl: './saved-items.component.html',
  styleUrl: './saved-items.component.css'
})
export class SavedItemsComponent implements OnInit {
  savedItems: any[] = [];
  savedProducts: any[] = [];

  constructor(private savedService: SavedService) {}

  ngOnInit(): void {
    this.savedProducts = this.savedService.getSavedItems();
  }

  removeFromSaved(product: any) {
  this.savedService.toggleSave(product);

// Update the list directly
  this.savedProducts = this.savedProducts.filter(
    p => p.id !== product.id
  );
}

}
