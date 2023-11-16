import { AgGridModule } from '@ag-grid-community/angular';
import { NgIf, AsyncPipe, NgTemplateOutlet } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ModuleRegistry ,ColDef} from '@ag-grid-community/core';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';

ModuleRegistry.registerModules([ClientSideRowModelModule]);

@Component({
  selector: 'angular-ag-grid-table',
  standalone: true,
  imports: [AgGridModule, NgIf, AsyncPipe, NgTemplateOutlet],
  template: `<ag-grid-angular
    style="width: 100%; height: 100%"
    class="ag-theme-alpine"
    [rowData]="rowData"
    [columnDefs]="columnDefs"
    ></ag-grid-angular
  >`,
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent {
  columnDefs: ColDef[] = [
    { field: 'make' },
    { field: 'model' },
    { field: 'price' },
  ];

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxster', price: 72000 },
  ];
}
