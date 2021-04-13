import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LargeItemsPageRoutingModule } from './large-items-routing.module';

import { LargeItemsPage } from './large-items.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LargeItemsPageRoutingModule
  ],
  declarations: [LargeItemsPage]
})
export class LargeItemsPageModule {}
