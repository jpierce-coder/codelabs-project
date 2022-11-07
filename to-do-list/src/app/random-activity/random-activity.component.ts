import { Component, OnInit } from '@angular/core';
import { RandomActivity } from './random-activity.model';

@Component({
  selector: 'app-random-activity',
  templateUrl: './random-activity.component.html',
  styleUrls: ['./random-activity.component.css']
})
export class RandomActivityComponent implements OnInit {

  randActivities: RandomActivity[] = [
    new RandomActivity('Repaint a room in your house', 'Recreational', 1),
    new RandomActivity('Organize your dresser', 'Busywork', 1)
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
