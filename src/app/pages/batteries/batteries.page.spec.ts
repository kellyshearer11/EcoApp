import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BatteriesPage } from './batteries.page';

describe('BatteriesPage', () => {
  let component: BatteriesPage;
  let fixture: ComponentFixture<BatteriesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatteriesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BatteriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
