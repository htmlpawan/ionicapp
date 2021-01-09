import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SlideSwiperPage } from './slide-swiper.page';

describe('SlideSwiperPage', () => {
  let component: SlideSwiperPage;
  let fixture: ComponentFixture<SlideSwiperPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideSwiperPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SlideSwiperPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
