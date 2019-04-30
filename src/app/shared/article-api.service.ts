import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleApiService {

  userId;
  aticleId;

   constructor(private http: HttpClient){}

   updateArticle(userId,i,article){
   return this.http.post('http://localhost:3000/article/articleUpdate/'+userId+'/'+i,article);
  }

  getArticle(userId, articleId) {
    return this.http.get('http://localhost:3000/id/' + userId + '/' + articleId);
  }

  addArticle(userId, article){
    return this.http.post('http://localhost:3000/addArticle/' + userId, article);
  }

  addComment(userId, articleId, article){
    return this.http.post('http://localhost:3000/addComment/' + userId + '/' + articleId , article);
  }


}
