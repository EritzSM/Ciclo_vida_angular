import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CicloVida } from './ciclo-vida';

describe('CicloVida', () => {
  let component: CicloVida;
  let fixture: ComponentFixture<CicloVida>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CicloVida]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CicloVida);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
