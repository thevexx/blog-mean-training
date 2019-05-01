import { Component, OnInit } from '@angular/core';
import { ArticleApiService } from '../shared/article-api.service';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  imgUrl = '';
  data;
  comments;
  id;
  constructor(private apiService: ArticleApiService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.apiService.decodeToken();

    const id = this.activatedRoute.snapshot.paramMap.get('id')
    console.log(id)

    this.apiService.getArticle(id).subscribe((res: any) => {
      console.log(res.data);
      this.data = res.data;
      this.comments = res.data.comments;
    })
  }

  updateArt(titl, topi, conten){
    //const i=0;
    const article = {
      title: titl,
      topic: topi,
      content: conten
    }

    this.id = this.activatedRoute.snapshot.paramMap.get('id')

    this.apiService.updateArticle(this.id, article).subscribe((res: any) => {
      console.log(res);
      this.ngOnInit();
    })
  }

  addComment(commentVal) {
    const com = { comment: commentVal };

    const id = this.activatedRoute.snapshot.paramMap.get('id')

    this.apiService.addComment(id, com).subscribe((res: any) => {
      this.ngOnInit();
    })
  }

  likeBtn() {
    const isLiked = this.data.liked.filter(elem => elem === this.apiService.userId).length === 1;
    if (isLiked) {
      this.data.liked = this.data.liked.filter(elem => elem !== this.apiService.userId);
    } else {
      this.data.liked.push(this.apiService.userId)
    }
    this.apiService.updateArticle(this.id, this.data).subscribe((res: any) => {
      this.ngOnInit();
    })
  }

  isLikedArticle() {
    return this.data.liked.filter(elem => elem === this.apiService.userId).length === 1;
  }
}
