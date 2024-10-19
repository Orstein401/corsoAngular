import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveEsercizioComponent } from './reactive-esercizio.component';

describe('ReactiveEsercizioComponent', () => {
  let component: ReactiveEsercizioComponent;
  let fixture: ComponentFixture<ReactiveEsercizioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveEsercizioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveEsercizioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
