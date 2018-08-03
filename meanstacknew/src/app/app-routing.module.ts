import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component'
import { FormtableComponent } from './formtable/formtable.component'
const routes: Routes = [
  { path: 'form', component: FormComponent },
  { path: '', component: FormtableComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
