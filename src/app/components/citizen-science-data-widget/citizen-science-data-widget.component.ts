import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CitizenScienceData, DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'citizen-science-data-widget-component',
  templateUrl: `citizen-science-data-widget.component.html`,
  styleUrl: 'citizen-science-data-widget.component.scss',
  standalone: true,
  imports: [CommonModule],
  encapsulation: ViewEncapsulation.None,
})
export class CitizenScienceDataWidgetComponent implements OnInit {
  citizenScienceData!: CitizenScienceData[];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getObservationData().subscribe((data) => {
      this.citizenScienceData = data.results;
    });
  }
}
