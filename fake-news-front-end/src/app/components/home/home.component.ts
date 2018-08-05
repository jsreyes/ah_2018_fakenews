import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 logros: ILogro[];
 paises = [];
 titulo: any = 'Bienvenidos';
 foods = [
  {value: 'steak-0', viewValue: 'Steak'},
  {value: 'pizza-1', viewValue: 'Pizza'},
  {value: 'tacos-2', viewValue: 'Tacos'}
];

 constructor(
  private countryService: CountryService,
 ) { }

 ngOnInit() {
     this.logros = this.getLogros();
     console.log(this.countryService.getCountries());
 }

 getLogros(): ILogro[] {
  return [{
     id: 1,
     title: 'Logré algo muy interesante',
     description: 'Lorem ipsum dolor sit amet'
  }, {
     id: 2,
     title: 'Logré otra cosa muy interesante',
     description: 'Lorem ipsum dolor sit amet'
  }, {
     id: 3,
     title: 'Logré algo aún mas interesante',
     description: 'Lorem ipsum dolor sit amet'
  }
 ];
 }
}

interface ILogro {
  id: number;
  title: string;
  description ?: string;
}
