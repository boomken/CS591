import {Component} from '@angular/core';
import {PriceAsyncService} from './price/price-async.service';
import {PRICE} from './models/price_model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PS6';
  prices: PRICE[];
  names: string;

  selectCrypto(): void {
    const newNames: string = this.names;
    this.price.getPrices(newNames)
      .subscribe(prices => {
          {
            const tmpAllkeys = Object.keys(prices);
            const tmpArray = [];
            for (const prop of tmpAllkeys) {
              tmpArray.push(prices[prop]);
            }
            this.prices = tmpArray;
            const x = document.getElementById('myBtn')
              .innerHTML = `The current rank of ${this.prices[0].name} is ${this.prices[0].cmc_rank}`;

          }
        }
      )
    ;
  }

  constructor(private price: PriceAsyncService) {
  }

  ngOnInit() {
  }
}
