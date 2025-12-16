import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuctionService } from '../../../../services/auction.service';

@Component({
  selector: 'app-today-highlights',
  imports: [CommonModule,RouterModule],
  templateUrl: './today-highlights.component.html',
  styleUrl: './today-highlights.component.css'
})
export class TodayHighlightsComponent implements OnInit{

  todayAuctions: any[] = [];
  countdown: any;
  items:any[]=[];

   constructor(private router: Router,
               private auctionService:AuctionService ) {}

    goToDetails(item: any) {
     this.router.navigate(['/product-details', item.id]);
  }

  ngOnInit(): void {
    this.items = this.auctionService.getByType('highlight');
    this.loadTodayAuctions();
    this.startCountdown();
  }

  loadTodayAuctions() {
    const saved = localStorage.getItem("today_highlights");
    const today = new Date().toISOString().split("T")[0];

    if (saved) {
      const parsed = JSON.parse(saved);

      // إذا النتائج هي نتائج اليوم → استخدمها
      if (parsed.date === today) {
        this.todayAuctions = parsed.data;
        return;
      }
    }

    // اختيار 4-5 منتجات عشوائية
    const shuffled = [...this.items].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 4);

    // حفظها لليوم
    localStorage.setItem("today_highlights", JSON.stringify({
      date: today,
      data: selected
    }));

    this.todayAuctions = selected;
  }

  startCountdown() {
  setInterval(() => {
    const now = new Date();
    const midnight = new Date();
    midnight.setHours(23, 59, 59, 999);

    const diff = midnight.getTime() - now.getTime();

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    this.countdown = `${hours}h ${minutes}m ${seconds}s`;

  }, 1000);
}
}
