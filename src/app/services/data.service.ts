import { Injectable } from '@angular/core';

import { experiences } from '../shared/data';
import { ExperienceModel } from '../shared/models/experience';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getExperiences(): ExperienceModel[] {
    return experiences;
  }
}
