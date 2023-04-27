import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddContentDailogComponent } from './add-content-dailog.component';

describe('AddContentDailogComponent', () => {
  let component: AddContentDailogComponent;
  let fixture: ComponentFixture<AddContentDailogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddContentDailogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddContentDailogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
