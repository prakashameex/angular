import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
//import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';

//declare const chance;

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,InfiniteScrollModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
