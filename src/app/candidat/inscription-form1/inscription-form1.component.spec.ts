import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionForm1Component } from './inscription-form1.component';

describe('InscriptionForm1Component', () => {
  let component: InscriptionForm1Component;
  let fixture: ComponentFixture<InscriptionForm1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptionForm1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscriptionForm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
