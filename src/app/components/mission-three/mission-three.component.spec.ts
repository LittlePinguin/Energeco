import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionThreeComponent } from './mission-three.component';

describe('MissionThreeComponent', () => {
  let component: MissionThreeComponent;
  let fixture: ComponentFixture<MissionThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissionThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
