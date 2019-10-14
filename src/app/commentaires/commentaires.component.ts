import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommentairesService } from '../service/commentaires.service';

@Component({
  selector: 'app-commentaires',
  templateUrl: './commentaires.component.html',
  styleUrls: ['./commentaires.component.css']
})
export class CommentairesComponent implements OnInit {

  commentaires;
  isOk;

  constructor(private service: CommentairesService,
              private router: Router
    ) { }

  ngOnInit() {

  this.service.getAll().subscribe( (resultat) => {
    this.commentaires = resultat;
  });
}

  onSubmitNewCommentaire($event, f) {
    $event.preventDefault();
    if (f.valid) {
      const com = f.value;
      this.service.create(com).subscribe(
        (result) => {
          console.log(result);
          this.isOk = true;
          this.router.navigate(['/commentaires']);
        }
      );
    }
  }
  onChangeTitre(titre) {
    console.log(titre.value);
    console.log(titre.valid);
  }
}
