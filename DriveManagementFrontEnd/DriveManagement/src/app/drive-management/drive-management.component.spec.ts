import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriveManagementComponent } from './drive-management.component';

describe('DriveManagementComponent', () => {
  let component: DriveManagementComponent;
  let fixture: ComponentFixture<DriveManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriveManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriveManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
