import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/projects.model';

@Component({
  selector: 'app-section-projects',
  templateUrl: './section-projects.component.html',
  styleUrls: ['./section-projects.component.scss']
})
export class SectionProjectsComponent implements OnInit {

  projects: Project[] = [
    {
      "img": "https://images.prismic.io/goulartlcs/6ee826af-8390-48ca-9c96-15bfc94e5658_ignews.png",
      "title": "ig.news",
      "description": "Projeto proposto no boomcamp Ignite na trilha de ReactJS da Rocketseat.",
      "tags": ["#Typescript", "#SASS", "#FaunaDB", "#NextAuth", "#StripeCLI", "#Prismic"],
      "code": "https://github.com/goulartlcs/ignews",
      "demo": "https://ignews.goulartlcs.dev/"
    },
    {
      "img": "https://images.prismic.io/goulartlcs/6ee826af-8390-48ca-9c96-15bfc94e5658_ignews.png",
      "title": "ig.news",
      "description": "Projeto proposto no boomcamp Ignite na trilha de ReactJS da Rocketseat.",
      "tags": ["#Typescript", "#SASS", "#FaunaDB", "#NextAuth", "#StripeCLI", "#Prismic"],
      "code": "https://github.com/goulartlcs/ignews",
      "demo": "https://ignews.goulartlcs.dev/"
    },
    {
      "img": "https://images.prismic.io/goulartlcs/6ee826af-8390-48ca-9c96-15bfc94e5658_ignews.png",
      "title": "ig.news",
      "description": "Projeto proposto no boomcamp Ignite na trilha de ReactJS da Rocketseat.",
      "tags": ["#Typescript", "#SASS", "#FaunaDB", "#NextAuth", "#StripeCLI", "#Prismic"],
      "code": "https://github.com/goulartlcs/ignews",
      "demo": "https://ignews.goulartlcs.dev/"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
