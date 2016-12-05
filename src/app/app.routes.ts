import { Routes } from '@angular/router';


import { HomeComponent } from './home/home.component';
import {MapPageComponent} from "./map-page/map-page.component";
import {DetailComponent} from "./detail/detail.component";
import {FormComponent} from "./form/form.component";
import {ChartComponent} from "./chart/chart.component";

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'detail', component: DetailComponent },
  { path: 'form', component: FormComponent },
  { path: 'map', component: MapPageComponent },
  { path: 'chart', component: ChartComponent },

];

