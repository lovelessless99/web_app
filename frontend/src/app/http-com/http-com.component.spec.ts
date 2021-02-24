import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpComComponent } from './http-com.component';

describe('HttpComComponent', () => {
  let component: HttpComComponent;
  let fixture: ComponentFixture<HttpComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpComComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
