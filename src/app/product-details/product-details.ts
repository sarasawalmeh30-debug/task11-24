import { Component, EventEmitter, Input, Output, signal } from '@angular/core';

@Component({
  selector: 'app-product-details',
  standalone: false,
  styleUrl: './product-details.css',
  templateUrl: './product-details.html',
})
export class ProductDetails {
   productName: string = 'Laptop';

  productDescription: string = 'High-performance laptop';

  productPrice: number = 750;

  productImage: string ='https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500';

  quantity=signal(1);

  isAvailable: boolean = true;

  discountPercentage: number = 10;
   increment() {
    this.quantity.update((c) => c + 1);
   }
   Decrease() {
    if(this.quantity() >0){
    this.quantity.update((c) => c - 1);
    }
   }


   @Input() ProductName:string ="";
   @Input() ProductDescription:string="";
   @Input() ProductPrice:number=0;
   @Input() ProductAvailability:boolean=false;

   @Output() massegsend=new  EventEmitter<string>();
   @Output() massegsend2=new  EventEmitter<number>();
   AddtoCartbutton(){
    this.massegsend.emit(this.productName);
    this.massegsend2.emit(this.quantity());
   }

}
