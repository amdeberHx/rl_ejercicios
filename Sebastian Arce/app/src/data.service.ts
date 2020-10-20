import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {


constructor(private http: HttpClient) { }

filterSearch(form: any, orden: any) {
//  return this.http.post<any>('https://apirest/getCuentas', { nroCuenta: form.tipo, orden: orden })
return of({cuentas:
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
})
}

getData(): Observable<any>{
  return of({cuentas:
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
  })
}
}

