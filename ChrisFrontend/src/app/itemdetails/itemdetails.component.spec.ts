import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemdetailsComponent } from './itemdetails.component';

describe('ItemdetailsComponent', () => {
  let component: ItemdetailsComponent;
  let fixture: ComponentFixture<ItemdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemdetailsComponent]
    });
    fixture = TestBed.createComponent(ItemdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
