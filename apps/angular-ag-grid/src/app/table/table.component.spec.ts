import { Component } from '@angular/core';
import { ComponentFixture, waitForAsync, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TableComponent } from './table.component';

@Component({
  template: `<angular-ag-grid-table> </angular-ag-grid-table>`,
})
class TestWrapperComponent {}

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TestWrapperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TestWrapperComponent],
      imports: [TableComponent, BrowserAnimationsModule],
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestWrapperComponent);
    component = fixture.debugElement.query(
      By.directive(TableComponent)
    ).componentInstance;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render', () => {
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });
});
