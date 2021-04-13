import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LargeItemsPage } from './large-items.page';

const routes: Routes = [
  {
    path: '',
    component: LargeItemsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LargeItemsPageRoutingModule {}
