import { Injectable } from '@angular/core';
import { createClient, getRepositoryEndpoint } from '@prismicio/client';
import { prismic } from 'src/environments/environment';

import { Experience } from '../models/experience.model';


@Injectable({
  providedIn: 'root'
})
export class SectionExperiencesService {
  repoName = 'goulartlcs'
  endpoint = getRepositoryEndpoint(this.repoName);
  client = createClient(this.endpoint, { accessToken: prismic.access_token });
  experiences: Experience[] = [];

  constructor() { }

  async getExperiences() {
    await this.client.getAllByType('experience').then(res => {
      res.map(experience => {
        const { data } = experience;

        const experienceToAdd = {
          empresa: data['company'][0].text,
          cargo: data['role'][0].text,
          periodo: data['period'][0].text,
          descricao: data['description'][0].text,
        };

        this.experiences.push(experienceToAdd);
      });
    }).catch(err => console.log(err));

    return this.experiences;
  }
}
