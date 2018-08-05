import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient, HttpClientModule, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
// import  'rxjs/add/operator/catch';

@Injectable()
export class CountryService {

  constructor(
    private _http: HttpClient,
  ) {
  }

  getCountries():Promise<any> {
    let url: any;
    url = 'https://restcountries.eu/rest/v2/all';
    return new Promise((resolve, reject) => {
      this._http.get(url)
      .lift((err: HttpErrorResponse) => {
          reject((err || 'Cant join the server.'));
          return Observable.throw(err);
        })
        .subscribe(data => { resolve(data); });
    });
  }
}
