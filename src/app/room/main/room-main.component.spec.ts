import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomMainComponent } from './room-main.component';

describe('CreateRoomComponent', () => {
  let component: RoomMainComponent;
  let fixture: ComponentFixture<RoomMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
