export interface iAccount {
  nroCuenta: number;
  tipo: string;
}

export interface iAccountData {
  cuentas: iAccount[];
}
