import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IosDetailComponent } from './ios-detail.component';

describe('IosDetailComponent', () => {
  let component: IosDetailComponent;
  let fixture: ComponentFixture<IosDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IosDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IosDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
