import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleApiService {
  ArticleId;
  userId;

   constructor(private http: HttpClient){}

  updateArticle(ArticleId, article) {
    return this.http.post('http://localhost:3000/article/articleUpdate/' + ArticleId + '/', article);
  }

  getArticle(userId, articleId) {
    return this.http.get('http://localhost:4200/id/' + userId + '/' + articleId);
  }

  addArticle(userId, article){

    return this.http.post('http://localhost:3000/addArticle/' + userId, article);
  }


}
