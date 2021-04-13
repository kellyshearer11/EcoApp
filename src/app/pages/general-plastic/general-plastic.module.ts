import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeneralPlasticPageRoutingModule } from './general-plastic-routing.module';

import { GeneralPlasticPage } from './general-plastic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeneralPlasticPageRoutingModule
  ],
  declarations: [GeneralPlasticPage]
})
export class GeneralPlasticPageModule {}
