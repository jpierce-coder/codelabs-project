import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogsAdoptComponent } from './dogs-adopt.component';

describe('DogsAdoptComponent', () => {
  let component: DogsAdoptComponent;
  let fixture: ComponentFixture<DogsAdoptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogsAdoptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DogsAdoptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
