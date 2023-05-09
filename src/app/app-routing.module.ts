import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { VitaeComponent } from './curriculum/vitae/vitae.component';

const routes: Routes = [
  { 
    path: '', 
    component: CurriculumComponent
  },
  { 
    path: 'curriculum', 
    component: VitaeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
