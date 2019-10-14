import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticlesOnlineService } from '../service/articles-online.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  isOk = false;

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
        this.isOk = true;
        this.router.navigate(['/update/:id']);
      }
    );
  }
    }
}
