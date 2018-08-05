import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormField, MatInputModule, MatListModule, MatCardModule, MatFormFieldModule, MatSelectModule } from '@angular/material';
// import { TruncatePipe } from './pipes/truncate.pipe'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
    // TruncatePipe
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
