import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSearchPageComponent } from './app-search-page.component';

describe('AppSearchPageComponent', () => {
  let component: AppSearchPageComponent;
  let fixture: ComponentFixture<AppSearchPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppSearchPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppSearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
