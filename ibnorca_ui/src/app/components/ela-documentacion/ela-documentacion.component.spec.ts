import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ElaDocumentacionComponent } from './ela-documentacion.component';

describe('ElaDocumentacionComponent', () => {
  let component: ElaDocumentacionComponent;
  let fixture: ComponentFixture<ElaDocumentacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElaDocumentacionComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ElaDocumentacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
