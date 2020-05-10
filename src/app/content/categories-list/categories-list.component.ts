import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { DataService } from '../../core/data.service';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {
  categories: any[] = [];

  constructor(private dataService: DataService,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.dataService.getCategories()
        .subscribe((categoriesList: any[]) => this.categories = categoriesList);
  }
}
