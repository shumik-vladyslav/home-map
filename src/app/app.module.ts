import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';


import { HomeComponent } from './home/home.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import {MapPageComponent, MinPipe, MaxPipe} from "./map-page/map-page.component";
import {DetailComponent} from "./detail/detail.component";
import {FormComponent} from "./form/form.component";
import {TranslateModule} from "ng2-translate";
import {HeaderComponent} from "./shared/header/header.component";
import {FooterComponent} from "./shared/footer/footer.component";
import * as spinner from 'ng2-spin-kit/app/spinners';
import {ChartComponent} from "./chart/chart.component";
import { ChartModule } from 'angular2-highcharts';
import {ModalModule} from "ng2-modal";

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    HomeComponent,
    MapPageComponent,
    FormComponent,
    HeaderComponent,
    FooterComponent,
    ChartComponent,
    MinPipe,
    MaxPipe,
    spinner.RotatingPlaneComponent,
    spinner.DoubleBounceComponent,
    spinner.WaveComponent,
    spinner.WanderingCubesComponent,
    spinner.PulseComponent,
    spinner.ChasingDotsComponent,
    spinner.CircleComponent,
    spinner.ThreeBounceComponent,
    spinner.CubeGridComponent,
    spinner.WordPressComponent,
    spinner.FadingCircleComponent,
    spinner.FoldingCubeComponent
  ],
  imports: [
    TranslateModule.forRoot(),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ChartModule,
    ModalModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true })
  ],
  providers: [
    // GithubService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
