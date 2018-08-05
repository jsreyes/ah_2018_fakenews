import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormControl, FormBuilder, FormGroup, Validators, FormsModule, NgForm, FormGroupDirective } from '@angular/forms';
import { ArticleService } from '../../../app/services/article.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ArticleService]
})

export class HomeComponent implements OnInit {
 public regiForm: FormGroup;
 private titulo = 'Bienvenidos';
 private countries = [
  {value: 1, viewValue: 'Colombia'},
  {value: 2, viewValue: 'Ecuador'},
  {value: 3, viewValue: 'Argentina'},
  {value: 4, viewValue: 'Venezuela'},
  {value: 5, viewValue: 'Brasil'}
];

private object = {
  articulo: '',
  pais: ''
};

private flag = false;
private probabilidad: any;

 constructor(
  private fb: FormBuilder,
  private articleService: ArticleService,
 ) {
 }

 ngOnInit() {
  this.initForm();

     console.log(this.countries);
 }

 initForm() {
  this.regiForm = this.fb.group({
    'articulo': new FormControl(this.object.articulo , Validators.compose([Validators.required])),
    'pais': new FormControl(this.object.pais, Validators.compose([Validators.required])),
  });
}

  validateArticle(form) {
    let object;
    object = form;
    this.articleService.createArticle(object).subscribe(response => {

      setTimeout(() => {
        console.log(response);
        this.probabilidad = response.porcentaje * 100;
        this.flag = true;   }, 10000);
    }, err => {
      console.error(err);
    });
  }
}
