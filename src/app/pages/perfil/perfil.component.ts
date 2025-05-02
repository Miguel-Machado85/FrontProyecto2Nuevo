import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaterialModule } from 'src/app/material.module';
import { Cuenta } from 'src/app/models/cuenta.model';
import { CuentaService } from 'src/app/services/cuenta/cuenta.service';

@Component({
  selector: 'perfil',
  imports: [MaterialModule, CommonModule],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.scss'
})
export class PerfilComponent {
  cuenta: Cuenta;

  constructor(private cuentaService: CuentaService){

  }

  ngOnInit(){
    this.getCuenta();
  }

  getCuenta(){
  }
}