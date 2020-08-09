import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddHackerComponent } from './add-hacker/add-hacker.component';
import { HttpClientModule } from '@angular/common/http';
import { ShowhackerComponent } from './showhacker/showhacker.component';
@NgModule({
  declarations: [
    AppComponent,
    AddHackerComponent,
    ShowhackerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
