import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PagesRoutingModule } from "../../../pages-routing.module";
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, FormsModule, PagesRoutingModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
searchTerm = '';

  allItems = [
    { id: 1, title: 'Luxury Car' },
    { id: 2, title: 'Smart Watch' },
    { id: 3, title: 'iPhone 15' },
    { id: 4, title: 'Gaming Laptop' },
    { id: 5, title: 'Designer Bag'},
    { id: 6, title: 'Drone X3'},
    { id: 7, title: 'Vintage Rolex Submariner' },
    { id: 8, title: 'Abstract Modern Art Piece' },
    { id: 9, title: 'Diamond Engagement Ring' },
    { id: 10,title: '2020 Tesla Model S' },
    { id: 11, title: 'Vintage Rolex Submariner'},
    { id: 12, title: 'Rolex Milgauss'},
    { id: 13, title: 'Rolex Datejust'}
  ];
  filteredItems: any[] = [];
  showDropdown: boolean = false;

  constructor(private router: Router) {}

  onSearchChange() {
    const value = this.searchTerm.toLowerCase();
    if (value.length > 0) {
      this.filteredItems = this.allItems.filter(item =>
        item.title.toLowerCase().includes(value)
      );
      this.showDropdown = this.filteredItems.length > 0;
    } else {
      this.showDropdown = false;
    }
  }

 goToItem(item: any) {
  this.showDropdown = false;
  this.searchTerm = '';
  this.router.navigate(['/product-details', item.id]);
}

}
