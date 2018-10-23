import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyParentComponent } from './lazy-parent/lazy-parent.component';
import { LazyChildComponent } from './lazy-child/lazy-child.component';
import {Routes,RouterModule} from '@angular/router'
const routes: Routes = [
  { path: 'load-parent', component: LazyParentComponent },
  { path: 'load-child', component: LazyChildComponent }

];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LazyParentComponent, LazyChildComponent]
})
export class LazyModule { }
