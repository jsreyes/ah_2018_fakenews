import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient, HttpClientModule, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class ArticleService {

  private headers = new Headers({'Content-Type': 'application/json'});


  constructor(
    private _http: HttpClient,
  ) {
  }

  createArticle(article):Observable<any> {
    const url = 'http://192.168.20.240:8080/api/data/enviar-articulo';
    const bodyf = JSON.stringify(article);
    return this._http.post(url, bodyf, {
      headers: new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
    });
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
