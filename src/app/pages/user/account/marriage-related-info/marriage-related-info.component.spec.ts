import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarriageRelatedInfoComponent } from './marriage-related-info.component';

describe('MarriageRelatedInfoComponent', () => {
  let component: MarriageRelatedInfoComponent;
  let fixture: ComponentFixture<MarriageRelatedInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarriageRelatedInfoComponent]
    });
    fixture = TestBed.createComponent(MarriageRelatedInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
