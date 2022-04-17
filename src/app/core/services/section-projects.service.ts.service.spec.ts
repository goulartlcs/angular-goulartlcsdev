import { TestBed } from '@angular/core/testing';

import { SectionProjectsService } from './section-projects.service';

describe('SectionProjects.Service.TsService', () => {
  let service: SectionProjectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SectionProjectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
