import { Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  // {
  //   path: '',
  //   component: LayoutComponent,
  //   children: [
  //     {
  //       path: '',
  //       loadComponent: () =>
  //         import('./pages/home/home.component').then((m) => HomeComponent),
  //     },
  //     {
  //       path: 'about',
  //       loadComponent: () =>
  //         import('./pages/about/about.component').then((m) => AboutComponent),
  //     },
  //     {
  //       path: 'skills',
  //       loadComponent: () =>
  //         import('./pages/skills/skills.component').then(
  //           (m) => SkillsComponent,
  //         ),
  //     },
  //     {
  //       path: 'experience',
  //       loadComponent: () =>
  //         import('./pages/experience/experience.component').then(
  //           (m) => ExperienceComponent,
  //         ),
  //     },
  //     {
  //       path: 'projects',
  //       loadComponent: () =>
  //         import('./pages/projects/projects.component').then(
  //           (m) => ProjectsComponent,
  //         ),
  //     },
  //     {
  //       path: 'contact',
  //       loadComponent: () =>
  //         import('./pages/contact/contact.component').then(
  //           (m) => ContactComponent,
  //         ),
  //     },
  //   ],
  // },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/home/home.component').then(m => m.HomeComponent),
      },
    ],
  },
];
