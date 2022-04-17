import { Component, OnInit } from '@angular/core';
import { Project } from './core/models/project.model';
import { SectionProjectsService } from './core/services/section-projects.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private projectsService: SectionProjectsService) { }

  projects: Project[] = [];

  ngOnInit() {
    this.projectsService.getProjects().then(res => this.projects = res);
  }

}

