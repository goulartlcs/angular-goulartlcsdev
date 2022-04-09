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
      "img": "https://images.prismic.io/goulartlcs/3d2b8e54-014f-4a33-8c6a-b6754be2f3ca_Screen+Shot+2022-02-06+at+15.07.27.png",
      "title": "Portfolio Pessoal",
      "description": "Projeto pessoal desenvolvimento em NextJS para divulgar meus conhecimentos técnicos na programação.",
      "tags": ["#nexjs", "#prismic", "#typescript"],
      "code": "https://github.com/goulartlcs/goulartlcsdev",
      "demo": "https://goulartlcs.dev/"
    },
    {
      "img": "https://images.prismic.io/goulartlcs/fd097664-b1ad-4fe4-81f4-0e496b26b5eb_Screen+Shot+2022-02-06+at+13.56.39.png",
      "title": "Cubos Payment Maganer",
      "description": "Neste projeto construi a API REST para cadastrar e gerenciar cobranças de clientes.",
      "tags": ["#node.js", "#reactjs", "#postgreSQL", "#knex", "#bcrypt", "#jsonwebtoken"],
      "code": "https://github.com/goulartlcs/back-payment-manager",
      "demo": "https://cubos.goulartlcs.dev/"
    },
    {
      "img": "https://images.prismic.io/goulartlcs/8b046f72-e0c6-4abd-a1cf-ef1aea103a9e_image_2022-02-06_12-55-27.png",
      "title": "dt money",
      "description": "Projeto front-end que simula a gestão das finanças pessoais. Nela, o usuário poderá registrar as transações de entrada, saída de sua conta e ter uma balanço.",
      "tags": ["#Javascript", "#TailwindCSS", "#react-number-format", "#react-modal", "#date-fns"],
      "code": "https://github.com/goulartlcs/dtmoney",
      "demo": "https://dtmoney.goulartlcs.dev/"
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
