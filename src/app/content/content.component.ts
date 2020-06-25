import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { IProduct } from '../shared/interfaces';
import { DataService } from '../core/data.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  searchText = '';
  sortOrder = null;

  constructor() { }

  ngOnInit(): void {
  }

  search(text) {
    this.searchText = text;
  }

  sort(order) {
    this.sortOrder = order;
  }
}
