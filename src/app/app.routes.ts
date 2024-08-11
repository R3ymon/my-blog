import { Routes } from '@angular/router';
import { HomePageComponent } from './domains/components/home-page/home-page.component';
import { NonFoundComponent } from './domains/components/non-found/non-found.component';
import { ProjectsComponent } from './domains/components/projects/projects.component';
export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'site',
    component: ProjectsComponent,
  },
  {
    path: '**',
    component: NonFoundComponent,
  },
];
