import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionEightComponent } from './mission-eight.component';

describe('MissionEightComponent', () => {
  let component: MissionEightComponent;
  let fixture: ComponentFixture<MissionEightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissionEightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
