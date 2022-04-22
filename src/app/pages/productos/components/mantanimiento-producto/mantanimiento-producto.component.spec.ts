import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantanimientoProductoComponent } from './mantanimiento-producto.component';

describe('MantanimientoProductoComponent', () => {
  let component: MantanimientoProductoComponent;
  let fixture: ComponentFixture<MantanimientoProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MantanimientoProductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MantanimientoProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
