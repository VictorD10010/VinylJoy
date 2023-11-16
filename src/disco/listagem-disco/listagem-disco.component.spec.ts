import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemDiscoComponent } from './listagem-disco.component';

describe('ListagemDiscoComponent', () => {
  let component: ListagemDiscoComponent;
  let fixture: ComponentFixture<ListagemDiscoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListagemDiscoComponent]
    });
    fixture = TestBed.createComponent(ListagemDiscoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
