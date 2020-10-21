import { Component, Input, OnInit, ViewChild } from '@angular/core';

import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  @Input() accountData = [];
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['nroCuenta', 'tipo'];
  dataSorted = null;

  constructor() {}

  ngOnInit(): void {
    this.dataSorted = new MatTableDataSource(this.accountData);
  }

  ngAfterViewInit() {
    this.dataSorted.sort = this.sort;
  }

  doFilter(value: string) {
    this.dataSorted.filter = value.trim().toLocaleLowerCase();
  }

}
