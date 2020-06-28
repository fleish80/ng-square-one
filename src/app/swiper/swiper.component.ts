import {Component, Inject, inject, Input, OnInit} from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss']
})
export class SwiperComponent implements OnInit {

  @Input() slides: string[];
  slidesPosition: number[];

  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit(): void {
  }

  private getSlidePosition() {
    this.slidesPosition = [];
    this.document.querySelectorAll('.slides')
      .forEach((div: HTMLElement) => this.slidesPosition.push(div.offsetLeft));
  }

  slide(direction: number) {

  }

}
