import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ArticlesOnlineService } from '../service/articles-online.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  articles;

  constructor(private service: ArticlesOnlineService,
              ) { }


  ngOnInit() {
    this.service.getAll().subscribe((resultat) => {
      this.articles = resultat;
    });
  }
}
