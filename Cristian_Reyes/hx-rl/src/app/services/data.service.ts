import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

private readonly RAW_DATA = {
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

  constructor() { }

  /**
   * Obtiene información sobre las cuentas de los usuarios.
   */
  getAccountData(): Observable<any> {

    return of(this.RAW_DATA);

  }


}
