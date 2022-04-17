import { TestBed } from '@angular/core/testing';

import { SectionExperiencesService } from './section-experiences.service';

describe('SectionExperiencesService', () => {
  let service: SectionExperiencesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SectionExperiencesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
