import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './pages/news/news.component';
import { HomeComponent } from './pages/home/home.component';
import { CalendarPageComponent } from './pages/calendar-page/calendar-page.component';

const defaultLang = 'en';
const routes: Routes = [
  { path: '', redirectTo: `/${defaultLang}/home`, pathMatch: 'full' },
  {
    path: ':lang',
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      { path: 'home', component: HomeComponent },
      { path: 'news', component: NewsComponent },
      { path: 'calendar', component: CalendarPageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
