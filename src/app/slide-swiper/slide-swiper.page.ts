import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-slide-swiper',
  templateUrl: './slide-swiper.page.html',
  styleUrls: ['./slide-swiper.page.scss'],
})
export class SlideSwiperPage implements OnInit {
  img:any;

  constructor() { }

  ngOnInit() {
    setTimeout(()=>{
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      spaceBetween: 10
    });
   },2000);
   this.img =[
             {name:'bitter-gourd'},
             {name:'potato'},
             {name:'brinjal'},
             {name:'fresh-brinjal'},
             {name:'lady-finger'},
             {name:'tomato'}
            ];
  }

}
