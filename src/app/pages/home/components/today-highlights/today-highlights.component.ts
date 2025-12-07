import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-today-highlights',
  imports: [CommonModule],
  templateUrl: './today-highlights.component.html',
  styleUrl: './today-highlights.component.css'
})
export class TodayHighlightsComponent implements OnInit{
allAuctions = [
    { id: 1, name: "Luxury Car", image: "/car.jpeg", price: 67000 },
    { id: 2, name: "Smart Watch", image: "/watch.jpeg", price: 250 },
    { id: 3, name: "iPhone 15", image: "/iphone.jpeg", price: 999 },
    { id: 4, name: "Gaming Laptop", image: "/laptop.jpeg", price: 1500 },
    { id: 5, name: "Designer Bag", image: "/bag.jpeg", price: 400 },
    { id: 6, name: "Drone X3", image: "/drone.png", price: 650 },
  ];

  todayAuctions: any[] = [];
  countdown: any;

  ngOnInit(): void {
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
    const shuffled = [...this.allAuctions].sort(() => 0.5 - Math.random());
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
