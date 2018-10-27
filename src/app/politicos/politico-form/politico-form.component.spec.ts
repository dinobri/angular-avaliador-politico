import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticoFormComponent } from './politico-form.component';

describe('PoliticoFormComponent', () => {
  let component: PoliticoFormComponent;
  let fixture: ComponentFixture<PoliticoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliticoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliticoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
