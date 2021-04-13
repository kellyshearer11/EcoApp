import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoodwastePage } from './foodwaste.page';

const routes: Routes = [
  {
    path: '',
    component: FoodwastePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodwastePageRoutingModule {}
