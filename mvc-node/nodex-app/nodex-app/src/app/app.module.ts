import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { FormsService } from './forms.service';
import { UserdataComponent } from './userdata/userdata.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule,} from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule, MatFormFieldModule, MatRadioModule, MatInputModule, MatNativeDateModule, MatSelectModule } from '@angular/material';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import{DialogOverviewExampleDialog} from './userdata/userdata.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { LoginComponent } from './login/login.component';

const ROUTES = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'userdata', component: UserdataComponent },
  { path: 'add', component: FormsComponent },
  { path: 'edit/:_id', component: FormsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: LoginComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    UserdataComponent,
    DialogOverviewExampleDialog,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, FormsModule,
    HttpModule, MatButtonModule,
    MatDatepickerModule,
    MatRadioModule,
    MatNativeDateModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    HttpModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatSortModule,
    MatDialogModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatSidenavModule,
    RouterModule.forRoot(ROUTES)
  ],
  entryComponents:[ DialogOverviewExampleDialog],
  providers: [FormsService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
