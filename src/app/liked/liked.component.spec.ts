import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikedComponent } from './liked.component';

describe('LikedComponent', () => {
  let component: LikedComponent;
  let fixture: ComponentFixture<LikedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LikedComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LikedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to trigger update like by button', async () => {
    spyOn(component, 'onClick');

    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();

    fixture.whenStable().then(() => {
      expect(component.onClick).toHaveBeenCalled();
    })
  })
});
