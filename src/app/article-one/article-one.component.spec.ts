import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleOneComponent } from './article-one.component';

describe('ArticleOneComponent', () => {
  let component: ArticleOneComponent;
  let fixture: ComponentFixture<ArticleOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
