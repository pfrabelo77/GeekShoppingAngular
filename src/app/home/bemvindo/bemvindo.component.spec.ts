import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BemvindoComponent } from './bemvindo.component';

describe('BemvindoComponent', () => {
  let component: BemvindoComponent;
  let fixture: ComponentFixture<BemvindoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BemvindoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BemvindoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
