import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './pages/news/news.component';
import { FooterComp } from './components/footer-comp/footer-comp.component';
import { HeaderComp } from './components/header-comp/header-comp.component';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule } from '@angular/router';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CalendarPageComponent } from './pages/calendar-page/calendar-page.component';
import { TranslatePipe } from './pipes/translate.pipe';
import { ContactFormModule } from './components/contact-form/contact-form.module';
import { SharedModule } from './utilities/modules/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    // TranslatePipe,
    // FooterComp,
    // HeaderComp,
    HomeComponent,
    NewsComponent,
    CalendarPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // AppRoutingModule,
    // CommonModule,
    SharedModule,
    CarouselComponent, // could move to a HomeComponentModule
    ContactFormModule, // could move to a HomeComponentModule
    RouterModule.forRoot([]),
  ],
  exports: [TranslatePipe],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
