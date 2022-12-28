import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatTabsModule,
    MatCardModule
  ],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatTabsModule,
    MatCardModule]
})
export class SharedModule { }
