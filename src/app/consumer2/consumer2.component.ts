import { Component, OnInit } from '@angular/core';
import {imageList, speakerList} from './data';

@Component({
  selector: 'app-consumer2',
  templateUrl: './consumer2.component.html',
  styleUrls: ['./consumer2.component.scss']
})
export class Consumer2Component {

  slides = speakerList;

}
