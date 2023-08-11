import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { MaterialModule } from '../modules/material/material.module';

@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [CommonModule, MaterialModule],
})
export class SharedModule {}
