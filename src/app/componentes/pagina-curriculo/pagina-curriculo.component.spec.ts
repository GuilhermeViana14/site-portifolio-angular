import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaCurriculoComponent } from './pagina-curriculo.component';

describe('PaginaCurriculoComponent', () => {
  let component: PaginaCurriculoComponent;
  let fixture: ComponentFixture<PaginaCurriculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaCurriculoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaCurriculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
