import { Component, OnInit } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'header-comp',
  templateUrl: './header-comp.component.html',
  styleUrl: './header-comp.component.scss',
})
export class HeaderComp implements OnInit {
  lang: string = 'en';
  initialized: boolean = false;

  constructor(
    private translationService: TranslationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.translationService.initializedTranslations$.subscribe(
      (initialized) => {
        this.initialized = initialized;
        this.lang = this.translationService.getLang();
      }
    );
  }

  changeLanguage(): void {
    this.translationService.changeLanguage();

    this.translationService.changeLanguage$.subscribe((language) => {
      const currentUrl = this.router.url.split('#')[0]; // todo: remove split after fixing scroll
      const updatedUrl = currentUrl.replace(
        /^\/[^\/]+/,
        `/${this.translationService.getLang()}`
      );
      window.location.href = location.origin + updatedUrl;
    });
  }
}
