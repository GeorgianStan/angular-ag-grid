import { Component } from '@angular/core';
import { TableComponent } from './table/table.component';

@Component({
  standalone: true,
  imports: [TableComponent],
  selector: 'angular-ag-grid-root',
  template:`<angular-ag-grid-table/>`
})
export class AppComponent {
  title = 'angular-ag-grid';
}
