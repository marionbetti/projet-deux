import { Component, OnInit } from '@angular/core';
import { ArticlesOnlineService } from '../service/articles-online.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-article-one',
  templateUrl: './article-one.component.html',
  styleUrls: ['./article-one.component.css']
})
export class ArticleOneComponent implements OnInit {

  article;
  constructor(private service: ArticlesOnlineService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe( (params) => {
      const id = params.get('_id');

      this.service.getOne(id).subscribe((resultat) => {
        this.article = resultat;
        console.log(resultat);
        this.router.navigate(['/articles/article._id']);
      });
    });
  }

  onClickUpdate(articles) {
    this.router.navigate(['/article/update', articles._id]);
  }
  onClickHome() {
    this.router.navigate(['/']);
  }
}
