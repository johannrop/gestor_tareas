import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './components/start/start.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'app-start',
    pathMatch: 'full',
  },
  {
    path: 'app-start',
    component: StartComponent,
  },
  {
    path: 'app-task',
    loadChildren: () =>
      import('./modules/body-task/body-task.module').then(
        (m) => m.BodyTaskModule
      ),
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
