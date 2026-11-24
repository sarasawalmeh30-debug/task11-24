import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: false,
  styleUrl: './footer.css',
  templateUrl: './footer.html',
})
export class Footer {
  storeName: string = 'Sara store';
  storeAddress: string = 'Amman, Jordan';
  contactEmail: string = 'support@Sarastore.com';
  copyright: string = '© 2026 Sara store. All Rights Reserved.';

}
