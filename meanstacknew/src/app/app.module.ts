import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {MatDatepickerModule,MatInputModule ,MatButtonModule ,MatFormFieldModule,MatSelectModule,MatNativeDateModule,MatCheckboxModule,MatTableModule} from '@angular/material';
import {MatPaginatorModule, MatSortModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormComponent } from './form/form.component';
import { FormtableComponent } from './formtable/formtable.component';
import {FormserviceService} from './formservice.service'
import { HttpModule }    from '@angular/http';
import { AppRoutingModule } from './/app-routing.module';
 

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    FormtableComponent
  ],
  imports: [
   MatDatepickerModule, BrowserModule,FormsModule,MatInputModule,BrowserAnimationsModule,MatFormFieldModule,MatButtonModule,MatSelectModule,MatNativeDateModule,MatCheckboxModule,MatTableModule,MatPaginatorModule, MatSortModule,HttpModule, AppRoutingModule
  ],
  providers: [FormserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
