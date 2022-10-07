import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadersigninComponent } from './readersignin.component';

describe('ReadersigninComponent', () => {
  let component: ReadersigninComponent;
  let fixture: ComponentFixture<ReadersigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadersigninComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadersigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
