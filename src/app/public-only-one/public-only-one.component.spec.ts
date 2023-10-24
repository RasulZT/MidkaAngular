import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicOnlyOneComponent } from './public-only-one.component';

describe('PublicOnlyOneComponent', () => {
  let component: PublicOnlyOneComponent;
  let fixture: ComponentFixture<PublicOnlyOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicOnlyOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicOnlyOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
