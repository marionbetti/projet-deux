import { Component, OnInit } from '@angular/core';
import { ArticlesOnlineService } from 'src/app/service/articles-online.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css']
})
export class NewArticleComponent implements OnInit {

  isOK = false;
  constructor(private service: ArticlesOnlineService,
              private router: Router) { }

  ngOnInit() {
  }

  onSubmitNewArticle($event, f) {
    $event.preventDefault();
    if (f.valid) {
      const newArticle = f.value;
      this.service.create(newArticle).subscribe(
        (result) => {
          console.log(result);
          this.isOK = true;
          this.router.navigate(['/new-article']);
        }
      );
    }
  }
  onChangeTitre(titre) {
    console.log(titre.value);
    console.log(titre.valid);
    }
}
