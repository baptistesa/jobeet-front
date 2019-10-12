import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllEntreprisesComponent } from './all-entreprises.component';

describe('AllEntreprisesComponent', () => {
  let component: AllEntreprisesComponent;
  let fixture: ComponentFixture<AllEntreprisesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllEntreprisesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllEntreprisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
