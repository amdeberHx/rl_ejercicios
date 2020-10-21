import { Component } from '@angular/core';
import { take } from 'rxjs/operators';

import { DataService } from '@services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Accounts | Red Link';
  accountData: [];

  constructor(
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.dataService
      .getAccountData()
      .pipe(take(1))
      .subscribe((data) => {
        this.accountData = data.cuentas;
        console.log(data.cuentas);
      });
  }

}
