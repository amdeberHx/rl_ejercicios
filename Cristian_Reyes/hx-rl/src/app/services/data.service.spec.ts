import { TestBed, waitForAsync } from '@angular/core/testing';
import { iAccount, iAccountData } from '@shared/interfaces/account';

import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;

  const DATA_MOCK: iAccountData = {
    "cuentas": [
      {
        "nroCuenta":1234,
        "tipo":"CA$"
      },
      {
        "nroCuenta":5678,
        "tipo":"CC$"
      },
      {
        "nroCuenta":9012,
        "tipo":"CAu$s"
      }
    ]
 };

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get account data', waitForAsync(() => {

    service.getAccountData()
      .subscribe((value: iAccountData) => {

        expect(value).not.toBeNull();

        const accounts: iAccount[] = value.cuentas;

        expect(accounts[0].nroCuenta).toEqual(DATA_MOCK.cuentas[0].nroCuenta);
        expect(accounts[0].tipo).toEqual(DATA_MOCK.cuentas[0].tipo);

        expect(accounts[2].nroCuenta).toEqual(DATA_MOCK.cuentas[2].nroCuenta);
        expect(accounts[2].tipo).toEqual(DATA_MOCK.cuentas[2].tipo);


        expect(accounts.length).toEqual(DATA_MOCK.cuentas.length);

      });


    expect(service).toBeTruthy();

  }));



});
