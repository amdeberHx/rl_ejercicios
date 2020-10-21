import { OrderModule } from 'ngx-order-pipe'

import { HttpClientModule } from '@angular/common/http'
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';


import { CuentasComponent } from './cuentas.component';
import { FormBuilder } from '@angular/forms';
import { FilterPipe } from '../filter.pipe';

describe('CuentasComponent', () => {
  let component: CuentasComponent;
  let fixture: ComponentFixture<CuentasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule, OrderModule ],
      declarations: [ CuentasComponent,FilterPipe  ],
      providers:[FormBuilder]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should getData', () => {
    const response = {cuentas:
      [
        {nroCuenta: 1234,
          tipo:'CA$'
        },
        {nroCuenta: 5678,
          tipo:'CC$'
        },{
          'nroCuenta':9012,
          'tipo':'CAu$s'
        }
      ]
    };
    component.data = '';
    component.getData();
    expect(component.data).toEqual(response.cuentas);
  });

});
