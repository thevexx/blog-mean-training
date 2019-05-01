import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleApiService {


  userId;
  articleId;
  commentId;
  authorId ;
  constructor(private http: HttpClient) { }

  updateArticle(articleId, article) {
    return this.http.post('http://localhost:3000/article/articleUpdate/' + articleId, article);
  }

  getArticle(authorId, articleId) {
    return this.http.get('http://localhost:3000/byAuthor/' + authorId + '/' + articleId);
  }

  getArticles() {
    return this.http.get('http://localhost:3000/article/articles');
  }

  addArticle(userId, article) {
    return this.http.post('http://localhost:3000/article/addArticle/' + userId, article);
  }

  addComment(userId, articleId, article) {
    return this.http.post('http://localhost:3000/addComment/' + userId + '/' + articleId, article);
  }

  commentUpdate(userId, commentId, article){
    return this.http.post('http://localhost:3000/commentUpdate/' + userId + '/' + commentId , article);
  }

  deleteComment(userId, commentId, article){
    return this.http.post('http://localhost:3000/deleteComment/' + userId + '/' + commentId , article);
  }





}
