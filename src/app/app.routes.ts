import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.routes').then(m => m.routesHome)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.routes').then(m => m.routesAbout)
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

export default routes;
