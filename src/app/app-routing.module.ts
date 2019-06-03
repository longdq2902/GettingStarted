import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrencyComponent } from './currency/currency.component';
import { WeatherComponent } from './weather/weather.component';
import { MovieComponent } from './movie/movie.component';
import { AppComponent } from './app.component';

// const routes: Routes = [
//   { path: '', redirectTo: '/weather', pathMatch: 'full' },
//   { path: 'weather', component: WeatherComponent },
//   { path: 'movie', component: MovieComponent },
//   { path: 'currency', component: CurrencyComponent }
// ];

const routes: Routes = [
  {
    path: '',
    loadChildren: './layout/layout.module#LayoutModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
// export const CONST_ROUTING = RouterModule.forRoot(routes);
