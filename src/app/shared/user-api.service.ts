import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  userId;
  constructor(private http: HttpClient) { }

  getUser(userId, articleId) {
    return this.http.get('http://localhost:3000/byAuthor/' + authorId + '/' + articleId);
  }
}
