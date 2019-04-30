import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleApiService {
  userId;
   constructor(private http: HttpClient){}

   updateArticle(userId,i,article){
   return this.http.post('http://localhost:3000/article/articleUpdate/'+userId+'/'+i,article);
  }

  // getArticle(userId){
  //   return this.http.post('http://localhost:3000/article/articleUpdate/'+userId+'/'+i,article);

  // }
}
