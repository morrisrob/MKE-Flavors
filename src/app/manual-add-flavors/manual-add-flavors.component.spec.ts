import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualAddFlavorsComponent } from './manual-add-flavors.component';

describe('ManualAddFlavorsComponent', () => {
  let component: ManualAddFlavorsComponent;
  let fixture: ComponentFixture<ManualAddFlavorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualAddFlavorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualAddFlavorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
