import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FoodwastePage } from './foodwaste.page';

describe('FoodwastePage', () => {
  let component: FoodwastePage;
  let fixture: ComponentFixture<FoodwastePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodwastePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FoodwastePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
