import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveArticleComponent } from './archive-article.component';

describe('ArchiveArticleComponent', () => {
  let component: ArchiveArticleComponent;
  let fixture: ComponentFixture<ArchiveArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchiveArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
