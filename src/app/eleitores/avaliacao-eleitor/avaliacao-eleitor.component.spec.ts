import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliacaoEleitorComponent } from './avaliacao-eleitor.component';

describe('AvaliacaoEleitorComponent', () => {
  let component: AvaliacaoEleitorComponent;
  let fixture: ComponentFixture<AvaliacaoEleitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvaliacaoEleitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvaliacaoEleitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
