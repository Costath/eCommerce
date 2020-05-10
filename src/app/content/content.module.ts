import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ContentComponent } from './content.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    ContentComponent,
    CategoriesListComponent,
    ItemsListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ]
})
export class ContentModule { }
