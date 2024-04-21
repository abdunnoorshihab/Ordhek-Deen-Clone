import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchProfileComponent } from './search-profile.component';

describe('SearchProfileComponent', () => {
  let component: SearchProfileComponent;
  let fixture: ComponentFixture<SearchProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchProfileComponent]
    });
    fixture = TestBed.createComponent(SearchProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
