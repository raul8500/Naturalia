import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { AnimalsComponent } from './pages/animals/animals';
import { ActivitiesComponent } from './pages/activities/activities';
import { ContactComponent } from './pages/contact/contact';

export const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: HomeComponent },
  { path: 'animales', component: AnimalsComponent },
  { path: 'actividades', component: ActivitiesComponent },
  { path: 'contacto', component: ContactComponent },
  { path: '**', redirectTo: '/inicio' }
];
