import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticlesOnlineService } from '../service/articles-online.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles;

  constructor(private service: ArticlesOnlineService,
              private router: Router) { }

  ngOnInit() {
    this.service.getAll().subscribe((resultat) => {
      this.articles = resultat;
    });
    }

// delete
onClickDelete(articles) {
  this.service.delete(articles._id).subscribe(
    (resultat) => {
      console.log(resultat);
      const index = this.articles.indexOf(articles);
      this.articles.splice(index, 1);
    }
  );
}
// update
onClickUpdate(articles) {
console.log(articles);
this.router.navigate(['/articles/update', articles._id]);
}
  }


