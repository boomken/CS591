import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PRICE} from '../models/price_model';
import {env} from '../../_config';
@Injectable({
  providedIn: 'root'
})
export class PriceAsyncService {
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json' })
  };
  pricesEndpoint = env.apiUrl;
  getPrices(newNames: any): Observable<PRICE[]> {
    return this.httpClient.get<PRICE[]>(this.pricesEndpoint + newNames.toString(), this.httpOptions);
  }

  constructor(private httpClient: HttpClient) { }
}
