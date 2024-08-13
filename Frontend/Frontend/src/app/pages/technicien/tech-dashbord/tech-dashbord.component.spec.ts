import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechDashbordComponent } from './tech-dashbord.component';

describe('TechDashbordComponent', () => {
  let component: TechDashbordComponent;
  let fixture: ComponentFixture<TechDashbordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TechDashbordComponent]
    });
    fixture = TestBed.createComponent(TechDashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
