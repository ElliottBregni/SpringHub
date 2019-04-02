import { TestBed } from '@angular/core/testing';

import { ArticleService } from './Article.service';

describe('RestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestService = TestBed.get(RestService);
    expect(service).toBeTruthy();
  });
});
