import { Component, OnInit } from '@angular/core';
import { ArticleApiService } from '../shared/article-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  articles = [];
  constructor(private apiService: ArticleApiService) { }

  ngOnInit() {
    console.log('here')
    this.apiService.getArticles().subscribe((res: any) => {
      console.log(res);
      this.articles = res.data;

    });

  }
}
