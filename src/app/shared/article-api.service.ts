import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleApiService {
  ArticleId;
   constructor(private http: HttpClient){}

   updateArticle(ArticleId,article){
   return this.http.post('http://localhost:3000/article/articleUpdate/'+ArticleId,article);
  }

  // getArticle(userId){
  //   return this.http.post('http://localhost:3000/article/articleUpdate/'+userId+'/'+i,article);

  // }
}
