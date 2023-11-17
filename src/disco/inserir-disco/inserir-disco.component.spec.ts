import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirDiscoComponent } from './inserir-disco.component';

describe('InserirDiscoComponent', () => {
  let component: InserirDiscoComponent;
  let fixture: ComponentFixture<InserirDiscoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InserirDiscoComponent]
    });
    fixture = TestBed.createComponent(InserirDiscoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
