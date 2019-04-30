import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleApiService {
 

  userId;
  ArticleId;

   constructor(private http: HttpClient){}

   updateArticle(ArticleId,article){
   return this.http.post('http://localhost:3000/article/articleUpdate/'+ArticleId,article);
  }

  getArticle(userId, ArticleId) {
    return this.http.get('http://localhost:3000/id/' + userId + '/' + ArticleId);
  }

  addArticle(userId, article){

    return this.http.post('http://localhost:3000/addArticle/' + userId, article);
  }


}
