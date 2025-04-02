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
    },
    {
      path: 'about-us',
      loadChildren: () => import('./modules/about-us/about-us.module').then(m => m.AboutUsModule),
    },
    {
      path: 'career',
      loadChildren: () => import('./modules/careers/careers.module').then(m => m.CareersModule),
    },
    {
      path: 'contact-us',
      loadChildren: () => import('./modules/contact-us/contact-us.module').then(m => m.ContactUsModule),
    },
    {
      path: 'products',
      loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule),
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false, scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
