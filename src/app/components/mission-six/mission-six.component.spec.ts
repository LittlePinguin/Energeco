import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionSixComponent } from './mission-six.component';

describe('MissionSixComponent', () => {
  let component: MissionSixComponent;
  let fixture: ComponentFixture<MissionSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissionSixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
