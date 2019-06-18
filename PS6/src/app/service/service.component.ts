import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { env } from '../../_config';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
users: any;
httpClient: any;
prices: any;
constructor(private http: HttpClient) {
    http.get(env.apiUrl)
      .subscribe(
        data => this.prices = data,
        err => console.log(`Error: ${err}`),
        () => console.log(`Complete request`)
      );
  }
  ngOnInit() {}
  // selectCrypto(price): void {
  //   this.selectCrypto = this.prices;
  // }
}
