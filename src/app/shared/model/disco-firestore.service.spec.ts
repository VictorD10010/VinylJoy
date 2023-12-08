import { TestBed } from '@angular/core/testing';

import { DiscoFirestoreService } from './disco-firestore.service';

describe('DiscoFirestoreService', () => {
  let service: DiscoFirestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiscoFirestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
