import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/core/models/experience.model';
import { SectionExperiencesService } from 'src/app/core/services/section-experiences.service';

@Component({
  selector: 'app-section-experiences',
  templateUrl: './section-experiences.component.html',
  styleUrls: ['./section-experiences.component.scss']
})
export class SectionExperiencesComponent implements OnInit {
  experiences : Experience[] = [];
  experienceSelected: Experience;
  companySelected: boolean = true;
  indexSelected: number = 0;
  isLoaded: Boolean = false;

  constructor(private experiencesService: SectionExperiencesService) {}

  ngOnInit(): void {
    this.experiencesService.getExperiences().then(res => {
      if (res.length > 0) {
        this.experiences = res;
        this.isLoaded = true;
        this.experienceSelected = this.experiences[this.indexSelected];
      } else {
        this.isLoaded = false;
      }
      }).catch(err => {
        console.log(err);
        this.isLoaded = false;
      });
  }

  handleExperienceClicked(i: number) {
    this.indexSelected = i;
    this.experienceSelected = this.experiences[this.indexSelected];

    return this.experienceSelected;
  }
}
