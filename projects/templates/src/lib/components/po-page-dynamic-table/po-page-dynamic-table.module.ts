import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PoTableModule } from '@portinari/portinari-ui';

import { PoPageDynamicSearchModule } from '../po-page-dynamic-search/po-page-dynamic-search.module';

import { PoPageDynamicTableComponent } from './po-page-dynamic-table.component';
import { PoPageCustomizationModule } from '../../services/po-page-customization/po-page-customization.module';

/**
 * @description
 *
 * Módulo do template do po-page-dynamic-search.
 */
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,

    PoTableModule,
    PoPageDynamicSearchModule,
    PoPageCustomizationModule
  ],
  declarations: [
    PoPageDynamicTableComponent
  ],
  exports: [
    PoPageDynamicTableComponent
  ]
})
export class PoPageDynamicTableModule { }
