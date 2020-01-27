import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridTwoComponent } from './grid-two.component';

describe('GridTwoComponent', () => {
  let component: GridTwoComponent;
  let fixture: ComponentFixture<GridTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
