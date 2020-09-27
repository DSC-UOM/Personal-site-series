import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/services/data.service';
import { ExperienceModel } from 'src/app/shared/models/experience';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit {

  experiences: ExperienceModel[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.experiences = this.dataService.getExperiences();
  }

}
