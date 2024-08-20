import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetoListarComponent } from './projeto-listar.component';

describe('ProjetoListarComponent', () => {
  let component: ProjetoListarComponent;
  let fixture: ComponentFixture<ProjetoListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjetoListarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjetoListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
