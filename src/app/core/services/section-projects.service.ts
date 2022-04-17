import { Injectable } from '@angular/core';
import { createClient, getRepositoryEndpoint } from '@prismicio/client';
import { prismic } from 'src/environments/environment';

import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class SectionProjectsService {
  repoName = 'goulartlcs'
  endpoint = getRepositoryEndpoint(this.repoName);
  client = createClient(this.endpoint, { accessToken: prismic.access_token });
  projects: Project[] = [];

  constructor() {}

  async getProjects() {
    await this.client.getAllByType('projects').then(res => {
      res.map(project => {
        const { data } = project;

        const projectToAdd = {
          title: data['title'][0].text,
          description: data['description'][0].text,
          tags: data['tech'],
          code: data['repo_link'].url,
          demo: data['demo_link'].url,
          img: data['thumbnail'].url,
        };

        this.projects.push(projectToAdd);
      });
    }).catch(err => console.log(err));

    return this.projects;
  }
}
