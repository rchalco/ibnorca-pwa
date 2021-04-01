import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListCiclosPage } from './list-ciclos.page';

describe('ListCiclosPage', () => {
  let component: ListCiclosPage;
  let fixture: ComponentFixture<ListCiclosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCiclosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListCiclosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
