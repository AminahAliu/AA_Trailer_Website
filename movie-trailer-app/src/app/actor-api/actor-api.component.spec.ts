import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorApiComponent } from './actor-api.component';

describe('ActorApiComponent', () => {
  let component: ActorApiComponent;
  let fixture: ComponentFixture<ActorApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActorApiComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
