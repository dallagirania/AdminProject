import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouteradminComponent } from './ajouteradmin.component';

describe('AjouteradminComponent', () => {
  let component: AjouteradminComponent;
  let fixture: ComponentFixture<AjouteradminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouteradminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouteradminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
