import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicaoEInsercaoProdutosComponent } from './edicao-einsercao-produtos.component';

describe('EdicaoEInsercaoProdutosComponent', () => {
  let component: EdicaoEInsercaoProdutosComponent;
  let fixture: ComponentFixture<EdicaoEInsercaoProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdicaoEInsercaoProdutosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdicaoEInsercaoProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
