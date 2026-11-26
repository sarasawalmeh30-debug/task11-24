import { Component } from '@angular/core';

interface Product {
  id:number;
  name: string;
  description: string;
  price: number;
  image: string;
  available: boolean;
  discount:number;
  Category:string;
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
      id:1,
      name: 'Laptop',
      description: 'High-performance laptop',
      price: 750,
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400',
      available: true,
      discount:15,
      Category:"Electronics"
    },
    {
      id:2,
      name: 'Smartphone',
      description: 'Latest smartphone',
      price: 450,
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400',
      available: true,
      discount:0,
      Category:"Electronics"
    },
    {
      id:3,
      name: 'Headphones',
      description: 'Wireless headphones',
      price: 80,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
      available: true,
      discount:10,
      Category:"Accessories"
    },
    {
      id:4,
      name: 'Smart Watch',
      description: 'Smart fitness watch',
      price: 120,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',
      available: true,
      discount:20,
      Category:"Accessories"
    },
    {
      id:5,
      name: 'Keyboard',
      description: 'Mechanical keyboard',
      price: 45,
      image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400',
      available: false,
      discount:5,
      Category:"Accessories"
    },
     {
      id:6,
      name: 'Tablet',
      description: 'Electronics',
      price: 300,
      image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400',
      available: false,
      discount:5,
      Category:"Electronics"
    },
     {
      id:7,
      name: 'Gaming Mouse',
      description: 'Mechanical keyboard',
      price: 45,
      image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400',
      available: true,
      discount:10,
      Category:"Accessories"
    },
     {
      id:8,
      name: 'Monitor',
      description: 'Mechanical keyboard',
      price: 220,
      image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400',
      available: false,
      discount:0,
      Category:"Electronics"
    }
  ];

  buyNow(productName: string) {
    alert('You selected: ' + productName);
  }
   orderStatus:string="Pending";
   productpriceColorRED ='red';
   productpriceColorBLACK='black';
   fontsizeofpremiumproduct ='40px';
   selectedCategory: string = 'All Products';
}
