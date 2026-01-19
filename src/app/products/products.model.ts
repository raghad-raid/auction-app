export interface Product {
  id: number;
  title: string;
  type: string;

  buyNow?: string;
  currentBid?: number;
  startingBid?: string;
  description?: string;

  seller: string;
  sellerId?: number;   

  condition?: string;
  category?: string;
  location?: string;
  views?: string | number;
  price?: string;
  bids?: number;
  timeLeft?: string;

  image: string;
  images?: string[];
}
