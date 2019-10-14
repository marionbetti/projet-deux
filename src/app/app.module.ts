import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ArticlesComponent } from './articles/articles.component';
import { NewArticleComponent } from './new-article/new-article.component';
import { ArticlesOnlineService, } from './service/articles-online.service';
import { ArticleOneComponent } from './article-one/article-one.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CommentairesComponent } from './commentaires/commentaires.component';
import { UpdateComponent } from './update/update.component';
import { FormsModule } from '@angular/forms';
import { CommentairesService } from './service/commentaires.service';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    ArticlesComponent,
    NewArticleComponent,
    ArticleOneComponent,
    NotFoundComponent,
    CommentairesComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path : '' , component: HomePageComponent},
      {path : 'articles', component: ArticlesComponent},
      {path : 'articles/new', component: NewArticleComponent},
      {path : 'articles/:id', component : ArticleOneComponent},
      {path : 'article/article/:id', component : ArticleOneComponent},
      {path : 'articles/update/:id', component: UpdateComponent},
      {path : 'commentaires', component: CommentairesComponent},
      {path : '**' , component: NotFoundComponent}

    ]),
    HttpClientModule,
    FormsModule
  ],

  providers: [
    ArticlesOnlineService,
    CommentairesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
