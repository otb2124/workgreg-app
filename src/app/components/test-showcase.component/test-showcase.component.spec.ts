import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestShowcaseComponent } from './test-showcase.component';

describe('TestShowcaseComponent', () => {
  let component: TestShowcaseComponent;
  let fixture: ComponentFixture<TestShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestShowcaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
