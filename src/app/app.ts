import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
   protected readonly title = signal('AngularComponents');
  ProductName=signal("tv");
  ProductDescription=signal("this product is important");
  ProductPrice=signal(500);
  ProductAvailability=signal(true);
  // ProductName2=signal("radio");
  // ProductPrice2=signal(100);
  message:string = "";
  qunnum:number=0;
  receiveMessage(data: string) {
    this.message = data;
  }
receiveMessage2(num:number) {
    this.qunnum = num;
  }

}
