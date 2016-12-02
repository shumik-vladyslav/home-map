import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';


import { HomeComponent } from './home/home.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import {MapPageComponent} from "./map-page/map-page.component";
import {DetailComponent} from "./detail/detail.component";
import {FormComponent} from "./form/form.component";
import {TranslateModule} from "ng2-translate";

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    HomeComponent,
    MapPageComponent,
    FormComponent

  ],
  imports: [
    TranslateModule.forRoot(),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true })
  ],
  providers: [
    // GithubService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
