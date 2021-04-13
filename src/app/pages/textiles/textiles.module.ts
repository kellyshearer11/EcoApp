import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TextilesPageRoutingModule } from './textiles-routing.module';

import { TextilesPage } from './textiles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TextilesPageRoutingModule
  ],
  declarations: [TextilesPage]
})
export class TextilesPageModule {}
