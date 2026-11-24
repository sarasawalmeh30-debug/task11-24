import { Component } from '@angular/core';

interface Product {
  name: string;
  description: string;
  price: number;
  image: string;
  available: boolean;
}

@Component({
  selector: 'app-product-list',
  standalone: false,
  styleUrl: './product-list.css',
  templateUrl: './product-list.html',
})
export class ProductList {

 products: Product[] = [
    {
      name: 'Laptop',
      description: 'High-performance laptop',
      price: 750,
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400',
      available: true
    },
    {
      name: 'Smartphone',
      description: 'Latest smartphone',
      price: 450,
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400',
      available: true
    },
    {
      name: 'Headphones',
      description: 'Wireless headphones',
      price: 80,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
      available: true
    },
    {
      name: 'Smart Watch',
      description: 'Smart fitness watch',
      price: 120,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',
      available: true
    },
    {
      name: 'Keyboard',
      description: 'Mechanical keyboard',
      price: 45,
      image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400',
      available: false
    }
  ];

  buyNow(productName: string) {
    alert('You selected: ' + productName);
  }

}
