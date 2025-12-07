import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PagesRoutingModule } from "../../../pages-routing.module";

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, FormsModule, PagesRoutingModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
searchTerm = '';

  search() {
    console.log('بحث عن:', this.searchTerm);
  }
}
