import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cuenta } from 'src/app/models/cuenta.model';


@Injectable({
  providedIn: 'root'
})
export class CuentaService {  
  private api_url='http://localhost:3000/cuenta'

  constructor(private http: HttpClient) { }


  addCuenta(cuenta: Cuenta): Observable<any>{
    const endpoint = `${this.api_url}/CreateAccount`;
    return this.http.post(endpoint, cuenta);
  }

  getCuenta(id: string): Observable<any>{
    const endpoint = `${this.api_url}/${id}`;
    return this.http.get(endpoint);
  }

  
}