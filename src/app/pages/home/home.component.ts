import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslationService } from '../../services/translation.service';
import { DataService } from '../../services/data.service';
import { ScrollService } from '../../services/scroll.service';
import { CarouselDatum } from '../../components/carousel/carousel.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
  title = 'bats-cyprus-angular';
  lang: 'en' | 'gr' = 'en';
  initialized: boolean = false;
  carouselData!: CarouselDatum[];

  constructor(
    private route: ActivatedRoute,
    private translationService: TranslationService,
    private dataService: DataService,
    private scrollService: ScrollService,
    private elementRef: ElementRef
  ) {
    this.route.params.subscribe((params) => {
      this.translationService.setInitialLang(params['lang']);
    });
  }

  ngOnInit() {
    this.dataService.getCarouselData().subscribe((data) => {
      this.carouselData = data;
    });

    this.translationService.initializedTranslations$.subscribe((bool) => {
      if (bool) {
        this.lang = this.translationService.getLang();
        this.initialized = true;
      }
    });
  }

  ngAfterViewInit(): void {
    this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        const element = this.elementRef.nativeElement.querySelector(
          `#${fragment}`
        );
        this.scrollService.scrollToElement(element);
      }
    });
  }

  range(start: number, end: number): number[] {
    return Array.from({ length: end - start + 1 }, (_, index) => start + index);
  }
}
