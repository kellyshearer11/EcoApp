import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoodwastePageRoutingModule } from './foodwaste-routing.module';

import { FoodwastePage } from './foodwaste.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoodwastePageRoutingModule
  ],
  declarations: [FoodwastePage]
})
export class FoodwastePageModule {}
