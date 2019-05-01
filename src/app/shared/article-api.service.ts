import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class ArticleApiService {


  userId;
  articleId;
  commentId;
  authorId ;
  constructor(private http: HttpClient) { }


  getArticles() {
    return this.http.get('http://localhost:3000/article/articles');
  }

   decodeToken() {
    if (localStorage.getItem('token')) {
      const token = localStorage.getItem('token');
      console.log(jwt_decode(token))
      this.userId = jwt_decode(token).data._id;
      this.authorId = jwt_decode(token).data.author;
      // this.articleId = jwt_decode(token).data.articles._id;
    }
  }

   updateArticle(articleId,article){
   return this.http.post('http://localhost:3000/article/updateArticle/'+articleId, article);
  }

  getArticle(articleId) {
    return this.http.get('http://localhost:3000/article/byId/' + articleId);
  }

  addArticle(userId, article){
    return this.http.post('http://localhost:3000/article/addArticle/' + userId, article);
  }

  addComment( articleId, comment){
    return this.http.post('http://localhost:3000/article/addComment/' + articleId + '/' + this.userId , comment);
  }





}
