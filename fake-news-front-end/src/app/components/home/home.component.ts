import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 logros: ILogro[];
 titulo: string = 'Bienvenidos';
 foods = [
  {value: 'steak-0', viewValue: 'Steak'},
  {value: 'pizza-1', viewValue: 'Pizza'},
  {value: 'tacos-2', viewValue: 'Tacos'}
];

 constructor() { }

 ngOnInit() {
     this.logros = this.getLogros();
     console.log(this.logros);
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

interface ILogro{
  id: number;
  title: string;
  description ?: string;
}
