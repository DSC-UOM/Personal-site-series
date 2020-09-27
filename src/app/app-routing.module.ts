import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExperiencesComponent } from './pages/experiences/experiences.component';

import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  { path: 'experiences', component: ExperiencesComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
