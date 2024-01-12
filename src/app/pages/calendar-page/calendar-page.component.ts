import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'calendar-page',
  templateUrl: `./calendar-page.component.html`,
  styleUrl: './calendar-page.component.scss',
})
export class CalendarPageComponent implements OnInit {
  initialized = false;

  constructor(
    private route: ActivatedRoute,
    private translationService: TranslationService
  ) {
    this.route.params.subscribe((params) => {
      this.translationService.setInitialLang(params['lang']);
    });
  }

  ngOnInit() {
    this.translationService.initializedTranslations$.subscribe((bool) => {
      if (bool) {
        this.initialized = true;
      }
    });
  }
}
