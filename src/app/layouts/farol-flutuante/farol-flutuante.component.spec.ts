import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarolFlutuanteComponent } from './farol-flutuante.component';

describe('FarolFlutuanteComponent', () => {
  let component: FarolFlutuanteComponent;
  let fixture: ComponentFixture<FarolFlutuanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarolFlutuanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarolFlutuanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
