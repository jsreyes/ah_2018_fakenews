import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [],
})
export class HomeComponent implements OnInit {
 private titulo = 'Bienvenidos';
 private countries = [
  {value: 1, viewValue: 'Colombia'},
  {value: 2, viewValue: 'Ecuador'},
  {value: 3, viewValue: 'Argentina'},
  {value: 4, viewValue: 'Venezuela'},
  {value: 5, viewValue: 'Brasil'}
];

 constructor(
 ) { }

 ngOnInit() {
     console.log(this.foods);
 }
}
