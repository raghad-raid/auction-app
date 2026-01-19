import { Injectable } from '@angular/core';
import { Product } from '../products/products.model';

@Injectable({
  providedIn: 'root'
})
export class AuctionService {
private STORAGE_KEY = 'products';
 
items :Product[]= [
    { id: 1,
      title: 'Luxury Car',
      type:'highlight',
      buyNow:'90,000',
      currentBid:0,
      startingBid:'2500',
      description:'A ultra-luxury, extremely rare super car finished in an exclusive, one-of-a-kind color, crafted with unparalleled precision and prestige.A true symbol of wealth, elegance, and automotive perfection.',
      seller:'Luxury',
      condition:'Excellent',
      category:'Vehicle',
      location:'Germany',
      views:'60',
      price: '90,000',
      bids:0 ,
      timeLeft:'2d 7h 30m',
      image:"/istockphoto-171258838-612x612.webp",
      images: ['/istockphoto-171258838-612x612.webp', '/istockphoto-482853787-612x612.webp']},

      {id: 2,
      title: 'Smart Watch',
      type:'highlight',
      buyNow:'500',
      currentBid:0,
      startingBid:'50',
      description:'A premium smart watch with a rare, exclusive color, combining cutting-edge technology with refined elegance.Designed for those who value uniqueness, luxury, and innovation.',
      seller:'Premium Seller',
      condition:'New',
      views:'46',
      category:'Watch',
      location:'Jordan',
      price: '500',
      bids: 0,
      timeLeft:'1h 27m',
      image:"/watch.jpeg",
      images:['/watch.jpeg','/smart 1.avif','/samrt 2.avif'] },

      {id: 3,
      title: 'iPhone 15',
      type:'highlight',
      buyNow:'2,000',
      currentBid:0,
      startingBid:'200',
      description:'The iPhone 15, a rare edition in an exclusive, striking color, combines cutting-edge technology with elegant, limited-edition design.A true collectors gem for tech enthusiasts who value both style and innovation',
      seller:'Exclusive',
      condition:'New',
      views:'96',
      category:'Smart phone',
      location:'USA',
      price: '2,000',
      bids:0,
      timeLeft:'4h 17m',
      image:"/photo-99.avif",
    images:['/photo-99.avif','/premium_photo.avif' ,'/photo-iph.avif','/photo-i.avif'], },

      {id: 4,
      title: 'Gaming Laptop',
      type:'highlight',
      buyNow:'5,000',
      currentBid:0,
      startingBid:'300',
      description:'A high-end gaming laptop in a rare, striking color, designed for ultimate performance and immersive gameplay.Combining cutting-edge hardware with exclusive aesthetics, it’s a true collector’s dream.',
      seller:'merchant',
      condition:'New',
      views:'96',
      category:'Electronic',
      location:'France',
      price: '5,000',
      bids: 0,
      timeLeft:'4h 17m',
      image:"/laptop.jpeg" ,
      images:["/istockphoto.jpg","/istock.webp"]},
      
       {id: 5,
      title: 'Designer Bag',
      type:'highlight',
      buyNow:'700',
      currentBid:0,
      startingBid:'100',
      description:'A rare designer bag in an exclusive, eye-catching color, crafted with impeccable detail and timeless elegance.A true statement piece for collectors and fashion connoisseurs.',
      seller:'Designer',
      condition:'New',
      views:'96',
      category:'Designer Bags',
      location:'Canada',
      price: '700',
      bids: 0,
      timeLeft:'4h 17m',
      image:"/photo-09.avif",
    images:["/photo-16.avif","/photo-09.avif"] },

       {id: 6,
      title: 'Drone X3',
      type:'highlight',
      buyNow:'2,000',
      currentBid:0,
      startingBid:'200',
      description:'The Drone X3, a rare high-performance marvel, comes in an exclusive, striking color and combines cutting-edge technology with sleek, futuristic design.A collector’s dream and a statement of innovation in the skies.',
      seller:'Official Drone X3',
      condition:'Brand New',
      views:'96',
      category:'Drones',
      location:'Brazil',
      price: '2,000',
      bids: 0,
      timeLeft:'4h 17m',
      image:"/drone.png" ,
    images:["/drone.png" ,"/photo-dro.avif","/premium-drone.avif"]},

      { id:7,
      title: 'age Rolex Submariner',
      type:'live',
      buyNow:'60,000',
      currentBid:0,
      startingBid:'2000',
      description:'A Vintage Rolex Submariner, a timeless and iconic luxury watch, rare in its classic design and distinguished color, epitomizing elegance and horological excellence.',
      seller:'Luxury timepieces',
      condition:'Excellent',
      category:'Watches',
      location:'Germany',
      views:'60',
      price: '$60,000',
      bids: 0 ,
      image:"/Rolex.jpg",
      images:['/Rolex.jpg', '/download (1).jpeg','/download (2).jpeg'],
    },

    { id:8,
      title: 'Abstract Modern Art Piece',
      type:'live',
      buyNow:'12,500',
      currentBid:0,
      startingBid:'500',
      description:'An Abstract Modern Art Piece, rare and striking in its unique color palette, blending bold creativity with contemporary sophistication.',
      seller:'ArtGallery',
      condition:'New',
      views:'46',
      category:'Art',
      location:'Russia',
      price: '$12,500',
      bids: 0,
      image:"/art.jpg" },

    { id:9,
      title: 'Diamond Engagement Ring',
      type:'live',
      buyNow:'100,000',
      currentBid:0,
      startingBid:'5000',
      description:'A Diamond Engagement Ring, exquisitely crafted and rare in its flawless brilliance, radiating timeless elegance and luxury.',
      seller:'Diamonds',
      condition:'New',
      views:'96',
      category:'Accessories',
      location:'USA',
      price: '$100,000',
      bids: 0,
      image:"/photo-ring.avif",
    images:["/photo-ring.avif","/premium_ri.avif","/istockphoto-12.webp"] },

    { id:10,
      title: '2020 Tesla Model S',
      type:'live',
      buyNow:'90,000',
      currentBid:0,
      startingBid:'10000',
      description:'A 2020 Tesla Model S, a rare and luxurious electric sedan in an exclusive color, combining cutting-edge technology with sleek, futuristic design.',
      seller:'EliteMotors',
      condition:'Used',
      views:'66',
      category:'vehicles',
      location:'United Arab Emirates',
      price: '$90,000',
      bids: 0,
      image:"/tesla.jpg",
    images:["/tesla.jpg", "/photo-tesb.avif"]},

      { id:11,
        title: 'Rolex Submariner',
        type:'auction',
      buyNow:'10,000',
      currentBid:0,
      startingBid:'900',
      description:'A Vintage Rolex Submariner, a rare and iconic luxury watch in a distinguished classic color, representing timeless elegance and exceptional craftsmanship.',
      seller:'Luxury timepieces',
      condition:'Excellent',
      category:'Watches',
      location:'Brazil',
      views:'60',
      price: '$10,000',
      bids: 0 ,
      timeLeft:'0h 57m',
      image:"/studio-crevettes-ADvixEYm5qE-unsplash.jpg",
      images:['/studio-crevettes-ADvixEYm5qE-unsplash.jpg','/photo-1526045431048-f857369baa09.avif']},

      { id:12,
        title: 'Rolex Milgauss',
        type:'auction',
      buyNow:'8,000',
      currentBid:0,
      startingBid:'500',
      description:'The Rolex Milgauss, a rare and innovative timepiece, features a distinctive design and a striking lightning-bolt second hand, engineered to resist magnetic fields.A perfect blend of scientific precision and iconic Rolex elegance.',
      seller:'Excellent',
      condition:'New',
      views:'46',
      category:'Watches',
      location:'Australia',
      price: '$8,000',
      bids: 0,
      timeLeft:'1h 27m',
      image:"/yash-parashar-LWPPpkn6NEQ-unsplash.jpg",
      images:['/yash-parashar-LWPPpkn6NEQ-unsplash.jpg','/photo-1.avif'] },

      { id:13,
       title: 'Rolex Datejust',
       type:'auction',
      buyNow:'20,000',
      currentBid:0,
      startingBid:'700',
      description:'The Rolex Datejust, a timeless and elegant watch, rare in its classic design and sophisticated dial colors.A symbol of luxury, precision, and enduring style.',
      seller:'Excellent',
      condition:'New',
      views:'96',
      category:'Watches',
      location:'Australia',
      price: '$20,000',
      bids: 0,
      timeLeft:'4h 17m',
      image:"/shahrukh-rehman-05IxAEjVNl0-unsplash.jpg"},
    ];

    constructor(){
    const stored =localStorage.getItem(this.STORAGE_KEY);
    if(stored){
      this.items=JSON.parse(stored);
    }else{
      this.save();
    }
  }

  private save(){
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.items) );
  }
  
  getAllProducts() :Product[]{
    return [...this.items];
  }

  getByType(type: string) {
    return this.items.filter(p => p.type === type);
  }

  getProductById(id: number) {
    return this.items.find(item => item.id === id);
  }
  getLiveAndHighlights() {
    return this.items.filter(
      p => p.type === 'live' || p.type === 'highlight'
    );
  }
  addProduct(product: any) {
  const products=JSON.parse(localStorage.getItem('products') ||'[]');
  products.push(product);
  localStorage.setItem('products',JSON.stringify(products));
  }
deleteProduct(productId: number) {

  this.items = this.items.filter(p => p.id !== productId);
  this.save();

  this.removeProductFromBids(productId);
  this.removeProductFromSaved(productId);
  this.removeProductFromPurchased(productId);
}

private removeProductFromBids(productId: number) {
  const bids = JSON.parse(localStorage.getItem('bidItems') || '[]');
  const updated = bids.filter((b: any) => b.id !== productId);
  localStorage.setItem('bidItems', JSON.stringify(updated));
}

private removeProductFromSaved(productId: number) {
  const saved = JSON.parse(localStorage.getItem('savedItems') || '[]');
  const updated = saved.filter((p: any) => p.id !== productId);
  localStorage.setItem('savedItems', JSON.stringify(updated));
}

private removeProductFromPurchased(productId: number) {
  const purchased = JSON.parse(localStorage.getItem('purchasedItems') || '[]');
  const updated = purchased.filter((p: any) => p.id !== productId);
  localStorage.setItem('purchasedItems', JSON.stringify(updated));
}

}


