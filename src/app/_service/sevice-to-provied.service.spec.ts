import { TestBed } from '@angular/core/testing';

import { SeviceToProviedService } from './sevice-to-provied.service';

describe('SeviceToProviedService', () => {
  let service: SeviceToProviedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeviceToProviedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
