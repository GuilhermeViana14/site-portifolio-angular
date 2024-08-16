import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaSobreMimComponent } from './pagina-sobre-mim.component';

describe('PaginaSobreMimComponent', () => {
  let component: PaginaSobreMimComponent;
  let fixture: ComponentFixture<PaginaSobreMimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaSobreMimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaSobreMimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
