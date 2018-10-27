import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticoListComponent } from './politico-list.component';

describe('PoliticoListComponent', () => {
  let component: PoliticoListComponent;
  let fixture: ComponentFixture<PoliticoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliticoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliticoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
