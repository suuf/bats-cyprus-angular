import { Component, OnInit } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { ActivatedRoute, Router } from '@angular/router';

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
    private router: Router,
    private route: ActivatedRoute
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
      const fragment = this.route.snapshot.fragment
        ? this.route.snapshot.fragment
        : null;

      if (fragment) {
        this.router
          .navigate([this.translationService.getLang(), 'home'], {
            fragment: fragment,
          })
          .then(() => {
            window.location.reload();
          });
      } else {
        this.router
          .navigate([this.translationService.getLang(), 'home'])
          .then(() => {
            window.location.reload();
          });
      }
    });
  }
}
