import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaDetailComponent } from './java-detail.component';

describe('JavaDetailComponent', () => {
  let component: JavaDetailComponent;
  let fixture: ComponentFixture<JavaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JavaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JavaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
