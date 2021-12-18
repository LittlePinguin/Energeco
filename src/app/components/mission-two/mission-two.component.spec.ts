import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionTwoComponent } from './mission-two.component';

describe('MissionTwoComponent', () => {
  let component: MissionTwoComponent;
  let fixture: ComponentFixture<MissionTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissionTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
