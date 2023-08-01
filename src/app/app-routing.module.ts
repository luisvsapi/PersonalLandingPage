import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { VitaeComponent } from './curriculum/vitae/vitae.component';
import { ExampleComponent } from './example/example.component';

const routes: Routes = [
  { 
    path: '', 
    component: CurriculumComponent
  },
  { 
    path: 'curriculum', 
    component: VitaeComponent
  },
  { 
    path: 'example', 
    component: ExampleComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
