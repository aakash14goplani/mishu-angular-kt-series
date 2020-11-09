import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChildComponent } from './child-component/child-component.component';
import { HomeComponent } from './home/home.component';
import { ParentComponent } from './parent-component/parent.component';

export const routes = [
  { path: 'home', component: HomeComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'child', component: ChildComponent },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
