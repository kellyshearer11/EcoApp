import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LargeItemsPage } from './large-items.page';

describe('LargeItemsPage', () => {
  let component: LargeItemsPage;
  let fixture: ComponentFixture<LargeItemsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LargeItemsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LargeItemsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
