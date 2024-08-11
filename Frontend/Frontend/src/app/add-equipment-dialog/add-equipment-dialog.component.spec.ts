import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEquipmentDialogComponent } from './add-equipment-dialog.component';

describe('AddEquipmentDialogComponent', () => {
  let component: AddEquipmentDialogComponent;
  let fixture: ComponentFixture<AddEquipmentDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEquipmentDialogComponent]
    });
    fixture = TestBed.createComponent(AddEquipmentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
