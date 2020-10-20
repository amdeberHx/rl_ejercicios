import { DataService } from './../../data.service'
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-cuentas',
  templateUrl: './cuentas.component.html',
  styleUrls: ['./cuentas.component.scss']
})
export class CuentasComponent implements OnInit {

  constructor(private dataService: DataService,
    private fb: FormBuilder) { }
  order: string = 'data.tipo';
  reverse: boolean = false;
  public data: any;
  public form: FormGroup;
  searchText: string;
  ngOnInit() {
    this.form = this.fb.group({
      nroCuenta:[null],
      tipo:['']
    })

 this.dataService.getData().subscribe(data => this.data = data.cuentas);
  }

  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }

  search(){
    this.dataService.filterSearch(this.form.value, this.reverse).subscribe(
      data => {this.data = data.cuentas;
      this.data = this.data.filter(x => x.tipo === this.form.value.tipo);
      }
      )
  }

  getData(){
    this.dataService.getData().subscribe(data => this.data = data.cuentas);
  }


}
