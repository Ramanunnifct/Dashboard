import { Routes } from '@angular/router';
import { AppSearchPageComponent } from './Module/app-search-page/app-search-page.component';
import { ApplicantFillingPageComponent } from './Module/applicant-filling-page/applicant-filling-page.component';

export const routes: Routes = [
  {
    path:'search',
    component:AppSearchPageComponent

  },
  {
path:'applicant',
component:ApplicantFillingPageComponent

  }
  
];
