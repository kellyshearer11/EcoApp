import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeneralPlasticPage } from './general-plastic.page';

const routes: Routes = [
  {
    path: '',
    component: GeneralPlasticPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeneralPlasticPageRoutingModule {}
