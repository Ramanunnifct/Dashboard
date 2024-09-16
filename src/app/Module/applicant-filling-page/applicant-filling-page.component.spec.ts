import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantFillingPageComponent } from './applicant-filling-page.component';

describe('ApplicantFillingPageComponent', () => {
  let component: ApplicantFillingPageComponent;
  let fixture: ComponentFixture<ApplicantFillingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplicantFillingPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicantFillingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
