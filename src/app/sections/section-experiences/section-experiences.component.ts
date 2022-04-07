import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/core/models/section-experiences.model';

@Component({
  selector: 'app-experiences',
  templateUrl: './section-experiences.component.html',
  styleUrls: ['./section-experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {
  experiences: Experience[] = [
    {
      "empresa": "Autônomo",
      "cargo": "Motoboy",
      "mesInicio": "Mar/2019",
      "mesFim": "Nov/2020",
      "descricao": "Motoboy autônomo atendendo clientes particulares em Curitiba e Região Metropolitana, para melhorar o gerenciamento das entregas e estudei um pouco sobre HTML, CSS e JS para desenvolver uma página simples para calcular automaticamente a distância entre os endereços e aplicar o meu preço, cada pedido era salvo no Google Planilhas."
    },
    {
      "empresa": "Adrenalina Motos",
      "cargo": "Assistente de E-Commerce",
      "mesInicio": "Nov/2020",
      "mesFim": "Mar/2021",
      "descricao": "Responsabilidades: cadastro de produtos na plataforma, edição de imagens, e-mail marketing, separação e expedição dos pedidos realizados pela loja virtual."
    },
    {

      "empresa": "Combat Informática",
      "cargo": "Assistente de Marketing",
      "mesInicio": "Mar/2021",
      "mesFim": "Fev/2022",
      "descricao": "Responsável pela criação de conteúdo das mídias sociais, material digital e gráfico como artes para Instagram, banners, anúncios, flyers, certificados e edição de imagem de produtos para a loja virtual."
    },
    {
      "empresa": "Provider IT",
      "cargo": "Desenvolvedor Front-End",
      "mesInicio": "Fev/2022",
      "mesFim": "Atualmente",
      "descricao": "Atuo como desenvolvedor front-end em Angular 2+ alocado no time de desenvolvimento em um dos clientes da empresa, o banco BV."
    }
  ];

  experienceDescription: Experience;
  companySelected: boolean = true;
  indexSelected: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.experiences.reverse();
    this.getExperienceDescription(this.indexSelected);
  }

  getExperienceDescription(i: number) {
    this.experienceDescription = this.experiences[i];
    this.indexSelected = i;

    return this.experienceDescription;
  }
}
