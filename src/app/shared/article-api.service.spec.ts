import { TestBed } from '@angular/core/testing';

import { ArticleApiService } from './article-api.service';

describe('UpdateArticleApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArticleApiService = TestBed.get(ArticleApiService);
    expect(service).toBeTruthy();
  });
});
