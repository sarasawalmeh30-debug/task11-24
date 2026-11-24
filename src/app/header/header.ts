import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
storename:string="sara store" ;
welcomemessage:string ="welcome to this store";
storeslogan:string="Everything You Need in One Place";
 
}
