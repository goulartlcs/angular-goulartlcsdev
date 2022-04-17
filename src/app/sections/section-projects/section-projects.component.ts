import { SectionProjectsService } from './../../core/services/section-projects.service';
import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/core/models/project.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-section-projects',
  templateUrl: './section-projects.component.html',
  styleUrls: ['./section-projects.component.scss']
})
export class SectionProjectsComponent implements OnInit {

  isLoaded: Boolean = false;
  projects: Project[] = [];

  constructor (private projectsService: SectionProjectsService) {}

  ngOnInit() {
    this.projectsService.getProjects().then(res => {
      if (res.length > 0) {
        this.projects = res;
        this.isLoaded = true;
      } else {
        this.isLoaded = false;
      }
    }).catch(err => {
      console.log(err);
      this.isLoaded = false;
    });
  }

}
