import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaListComponent } from './java-list.component';

describe('JavaListComponent', () => {
  let component: JavaListComponent;
  let fixture: ComponentFixture<JavaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JavaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JavaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
