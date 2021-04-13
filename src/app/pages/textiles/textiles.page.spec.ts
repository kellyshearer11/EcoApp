import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TextilesPage } from './textiles.page';

describe('TextilesPage', () => {
  let component: TextilesPage;
  let fixture: ComponentFixture<TextilesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextilesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TextilesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
