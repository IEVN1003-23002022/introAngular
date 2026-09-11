import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeoresList } from './heores-list';

describe('HeoresList', () => {
  let component: HeoresList;
  let fixture: ComponentFixture<HeoresList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeoresList],
    }).compileComponents();

    fixture = TestBed.createComponent(HeoresList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
