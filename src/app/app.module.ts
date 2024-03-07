import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NewsComponent } from './pages/news/news.component';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule } from '@angular/router';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CalendarPageComponent } from './pages/calendar-page/calendar-page.component';
import { TranslatePipe } from './pipes/translate.pipe';
import { ContactFormModule } from './components/contact-form/contact-form.module';
import { SharedModule } from './utilities/modules/shared.module';
import { CitizenScienceDataWidgetComponent } from './components/citizen-science-data-widget/citizen-science-data-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewsComponent,
    CalendarPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    CarouselComponent, // could move to a HomeComponentModule
    ContactFormModule, // could move to a HomeComponentModule
    CitizenScienceDataWidgetComponent, // could move to a HomeComponentModule
    RouterModule.forRoot([]),
  ],
  exports: [TranslatePipe],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
