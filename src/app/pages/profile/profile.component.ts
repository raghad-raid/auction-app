import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
 user = {
    name: "Rag Raid",
    email: "raghadr@gmail.com"
  };

  activeBids = [
    {
      title: "Vintage Rolex Submariner",
      price: 44500,
      status: "Winning",
      timeLeft: "2h 51m",
      action: "View Item"
    },
    {
      title: "Diamond Engagement Ring",
      price: 8500,
      status: "Outbid",
      timeLeft: "2h 51m",
      action: "Increase Bid"
    },
    {
      title: "Limited Edition Sneakers",
      price: 1200,
      status: "Won",
      timeLeft: "1h 33m",
      action: "View Order"
    }
  ];

  stats = {
    active: 3,
    won: 12,
    saved: 2
  };

}
