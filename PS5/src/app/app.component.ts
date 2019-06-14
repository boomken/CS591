import { Component } from '@angular/core';
import {PRICE} from './CryptoPrice';
import {PRICES} from './CryptoPrice_MOCK';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PS5';
  prices = PRICES;
  private selectedCrypto: PRICE;
  selectCrypto(price: PRICE): void {
    this.selectedCrypto = price;
  }

}
