import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeInscrisComponent } from './home-inscris.component';

describe('HomeInscrisComponent', () => {
  let component: HomeInscrisComponent;
  let fixture: ComponentFixture<HomeInscrisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeInscrisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeInscrisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
