import {AfterViewInit, Component, Inject, inject, Input, OnInit, TemplateRef} from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss']
})
export class SwiperComponent implements AfterViewInit {

  @Input() slides: string[];
  @Input() slidesTemplate: TemplateRef<any>;
  slidesPosition: number[];
  currentIndex = 0;

  nav = {
    prev: () => this.slide(-1),
    next: () => this.slide(+1)
  };

  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  ngAfterViewInit(): void {
    this.getSlidePosition();
  }


  private getSlidePosition() {
    this.slidesPosition = [];
    this.document.querySelectorAll('.slide')
      .forEach((div: HTMLElement) => this.slidesPosition.push(div.offsetLeft));
  }

  slide(direction: number) {
    this.currentIndex += direction;
    if (this.currentIndex < 0) {
      this.currentIndex = this.slidesPosition.length - 1;
    }
    if (this.currentIndex > this.slidesPosition.length - 1) {
      this.currentIndex = 0;
    }
    this.document.querySelector('.slider').scrollTo({
      left: this.slidesPosition[this.currentIndex],
      behavior: 'smooth'
    });
  }


}
