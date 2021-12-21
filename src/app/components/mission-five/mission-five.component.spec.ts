import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionFiveComponent } from './mission-five.component';

describe('MissionFiveComponent', () => {
  let component: MissionFiveComponent;
  let fixture: ComponentFixture<MissionFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissionFiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
