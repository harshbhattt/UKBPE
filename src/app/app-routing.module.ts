import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootComponent } from './components/root/root.component';

const routes: Routes = [{
  path: '',
  component: RootComponent,
  children: [
    {
      path: '',
      loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
    },
    {
      path: 'home',
      loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false, scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
