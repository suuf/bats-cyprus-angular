import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CitizenScienceData, DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';
import { SharedModule } from '../../utilities/modules/shared.module';

@Component({
  selector: 'citizen-science-data-widget-component',
  templateUrl: `citizen-science-data-widget.component.html`,
  styleUrl: 'citizen-science-data-widget.component.scss',
  standalone: true,
  imports: [CommonModule, SharedModule],
  encapsulation: ViewEncapsulation.None,
})
export class CitizenScienceDataWidgetComponent implements OnInit {
  citizenScienceData!: CitizenScienceData[];
  initializedLang: boolean = false;

  constructor(
    private dataService: DataService,
    private translationService: TranslationService
  ) {}

  ngOnInit() {
    this.dataService.getObservationData().subscribe((data) => {
      this.citizenScienceData = data.results;
    });

    this.translationService.initializedTranslations$.subscribe(
      (initialized) => {
        this.initializedLang = initialized;
      }
    );
  }
}
