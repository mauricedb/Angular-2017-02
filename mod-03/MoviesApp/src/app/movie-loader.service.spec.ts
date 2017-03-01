import { TestBed, inject } from '@angular/core/testing';

import { MovieLoaderService } from './movie-loader.service';

describe('MovieLoaderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieLoaderService]
    });
  });

  it('should ...', inject([MovieLoaderService], (service: MovieLoaderService) => {
    expect(service).toBeTruthy();
  }));
});
