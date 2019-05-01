import { Component, OnInit } from '@angular/core';
import { ArticleApiService } from '../shared/article-api.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  imgUrl = '';

  constructor(private apiService: ArticleApiService) { }

  ngOnInit() {
    // this.apiService.decodeToken();
    // console.log(this.apiService.userId);

    // this.apiService.getArticle(this.apiService.userId).subscribe((res: any) => {
    //   console.log(res);
    //   this.article = res.data.toDoList;
    // })
  }

  updateArt(titl, topi, conten){
    //const i=0;
    const article = {
      title : titl,
      topic : topi,
      content : conten
    }
    this.apiService.updateArticle(this.apiService.commentId,article).subscribe((res: any) => {
      console.log(res);
      this.ngOnInit();
    })
  }
}
