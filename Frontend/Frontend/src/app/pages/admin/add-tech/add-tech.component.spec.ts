import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTechComponent } from './add-tech.component';

describe('AddTechComponent', () => {
  let component: AddTechComponent;
  let fixture: ComponentFixture<AddTechComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddTechComponent]
    });
    fixture = TestBed.createComponent(AddTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
