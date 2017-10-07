import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SiteHeaderComponent } from './components/site-header/site-header.component';
import { BoxComponent } from './components/box/box.component';
import { SearchPortfolioComponent } from './components/search-portfolio/search-portfolio.component';
import { SiteFooterComponent } from './components/site-footer/site-footer.component';

import {BoxService} from './services/box.service';
import {DataService} from './services/data.service';



@NgModule({
  declarations: [
    AppComponent,
    SiteHeaderComponent,
    BoxComponent,
    SearchPortfolioComponent,
    SiteFooterComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    BoxService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
