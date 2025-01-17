import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SommaComponent } from './somma.component';

describe('SommaComponent', () => {
  let component: SommaComponent;
  let fixture: ComponentFixture<SommaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SommaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SommaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
