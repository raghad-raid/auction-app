import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero-section',
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class HeroSectionComponent {
 
  scrollToHowItWorks() {
  const section = document.getElementById("howItWorks");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

}
