import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  standalone: false,
  styleUrl: './shopping-cart.css',
  templateUrl: './shopping-cart.html',
})
export class ShoppingCart {
@Input() product1:string="";
@Input() price1:number=0;
@Input() Quantity:number=0;
get total(): number {
    return this.Quantity * this.price1;
  }

}
