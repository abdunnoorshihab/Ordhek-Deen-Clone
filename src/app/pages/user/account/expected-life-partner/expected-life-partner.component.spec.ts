import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpectedLifePartnerComponent } from './expected-life-partner.component';

describe('ExpectedLifePartnerComponent', () => {
  let component: ExpectedLifePartnerComponent;
  let fixture: ComponentFixture<ExpectedLifePartnerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpectedLifePartnerComponent]
    });
    fixture = TestBed.createComponent(ExpectedLifePartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
