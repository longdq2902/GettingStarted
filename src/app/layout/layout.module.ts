import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { CurrencyComponent } from '../currency/currency.component';
import { WeatherComponent } from '../weather/weather.component';
import { MovieComponent } from '../movie/movie.component';
import { LayoutRoutingModule } from './layout.routing.module';
import { MenuComponent } from '../menu/menu.component';


const APP_COMPONENT = [MenuComponent, WeatherComponent, MovieComponent, CurrencyComponent];

@NgModule({
  declarations: [LayoutComponent, APP_COMPONENT],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ],
  entryComponents: [MenuComponent]
})
export class LayoutModule { }
