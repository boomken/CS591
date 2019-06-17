import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
users: any;
httpClient: any;
prices: any;
value: any;
constructor(private http: HttpClient) {
    http.get('http://localhost:3000/ps4')
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
