import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsOneComponent } from './es-one.component';

describe('EsOneComponent', () => {
  let component: EsOneComponent;
  let fixture: ComponentFixture<EsOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EsOneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EsOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
