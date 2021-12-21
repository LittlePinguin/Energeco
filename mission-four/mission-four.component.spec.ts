import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionFourComponent } from './mission-four.component';

describe('MissionFourComponent', () => {
  let component: MissionFourComponent;
  let fixture: ComponentFixture<MissionFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissionFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
