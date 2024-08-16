import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTextosComponent } from './home-textos.component';

describe('HomeTextosComponent', () => {
  let component: HomeTextosComponent;
  let fixture: ComponentFixture<HomeTextosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeTextosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeTextosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
