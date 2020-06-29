import { Component, OnInit } from '@angular/core';
import {imageList} from '../consumer2/data';

@Component({
  selector: 'app-consumer1',
  templateUrl: './consumer1.component.html',
  styleUrls: ['./consumer1.component.scss']
})
export class Consumer1Component implements OnInit {

  slides = imageList.map(x => x.imageUrl);

  constructor() { }

  ngOnInit(): void {
  }

}
