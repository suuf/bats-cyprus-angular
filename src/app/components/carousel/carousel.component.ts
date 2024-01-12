import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

export interface CarouselDatum {
  title: string;
  imageLink: string;
  altText: string;
  sourceLink: string;
  sourceAuthor: string;
}

@Component({
  selector: 'carousel-component',
  templateUrl: `carousel.component.html`,
  styleUrl: 'carousel.component.scss',
  standalone: true,
  imports: [NgbCarouselModule, CommonModule],
  encapsulation: ViewEncapsulation.None,
})
export class CarouselComponent implements OnInit {
  @Input() data!: CarouselDatum[];

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  ngOnInit() {
    // Initialization code here
  }
}
