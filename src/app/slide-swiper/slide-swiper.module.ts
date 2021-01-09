import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SlideSwiperPageRoutingModule } from './slide-swiper-routing.module';

import { SlideSwiperPage } from './slide-swiper.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SlideSwiperPageRoutingModule
  ],
  declarations: [SlideSwiperPage]
})
export class SlideSwiperPageModule {}
