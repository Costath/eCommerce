import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  @Output() changed: EventEmitter<string> = new EventEmitter<string>();

  private Filter: string;
  @Input() get filter() {
      return this.Filter;
  }
  set filter(val: string) {
      this.Filter = val;
      this.changed.emit(this.filter); // Raise changed event
  }

  constructor() { }

  ngOnInit(): void {
  }
}
