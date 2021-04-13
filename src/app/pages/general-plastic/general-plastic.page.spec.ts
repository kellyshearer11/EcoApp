import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GeneralPlasticPage } from './general-plastic.page';

describe('GeneralPlasticPage', () => {
  let component: GeneralPlasticPage;
  let fixture: ComponentFixture<GeneralPlasticPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralPlasticPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GeneralPlasticPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
