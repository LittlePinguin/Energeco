import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionSevenComponent } from './mission-seven.component';

describe('MissionSevenComponent', () => {
  let component: MissionSevenComponent;
  let fixture: ComponentFixture<MissionSevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissionSevenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
