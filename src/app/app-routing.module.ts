import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { QuesComponent } from './ques/ques.component';




const routes: Routes = [
  {
    path: 'mcqQuestion',
    component: QuesComponent,
  },
  {
    path: '',
    redirectTo: 'mcqQuestion',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
