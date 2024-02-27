import { Component, OnInit } from '@angular/core';
import { environment } from '../environment/environment';
import { GoogleAnalyticsService } from './services/google-analytics.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'bats-cyprus-angular';

  constructor(private googleAnalyticsService: GoogleAnalyticsService) {}

  ngOnInit() {
    if (environment.production) {
      this.googleAnalyticsService.initialize();
    }
  }
}
