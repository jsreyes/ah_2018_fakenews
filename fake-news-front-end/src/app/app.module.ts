import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule, MatListModule, MatCardModule, MatFormFieldModule, MatSelectModule, MatButtonModule } from '@angular/material';
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
    MatSelectModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
