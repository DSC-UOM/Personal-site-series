import { Component, Input, OnInit } from '@angular/core';
import { ExperienceModel } from 'src/app/shared/models/experience';

@Component({
  selector: 'app-xp-card',
  templateUrl: './xp-card.component.html',
  styleUrls: ['./xp-card.component.css']
})
export class XpCardComponent implements OnInit {

  @Input() experience: ExperienceModel;

  constructor() { }

  ngOnInit(): void {
  }

}
