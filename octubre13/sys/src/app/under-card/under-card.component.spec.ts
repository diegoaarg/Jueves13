import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderCardComponent } from './under-card.component';

describe('UnderCardComponent', () => {
  let component: UnderCardComponent;
  let fixture: ComponentFixture<UnderCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnderCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnderCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
