import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSegurancaComponent } from './home-seguranca.component';

describe('HomeSegurancaComponent', () => {
  let component: HomeSegurancaComponent;
  let fixture: ComponentFixture<HomeSegurancaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSegurancaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSegurancaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
