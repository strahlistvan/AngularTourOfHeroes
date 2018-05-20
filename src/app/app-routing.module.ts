import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const ALL_ROUTES: Routes = [
  {path: 'heroes', component: HeroesComponent}
 ,{path: 'dashboard', component: DashboardComponent}
 ,{path: '', redirectTo: '/dashboard', pathMatch: 'full'}
 ,{path: 'detail/:id', component: 'HeroDetailComponent'}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(ALL_ROUTES) ]
})
export class AppRoutingModule { }
