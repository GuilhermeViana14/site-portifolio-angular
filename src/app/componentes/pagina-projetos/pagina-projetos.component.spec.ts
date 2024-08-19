import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaProjetosComponent } from './pagina-projetos.component';

describe('PaginaProjetosComponent', () => {
  let component: PaginaProjetosComponent;
  let fixture: ComponentFixture<PaginaProjetosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaProjetosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaProjetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
