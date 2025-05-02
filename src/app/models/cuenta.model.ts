export interface Cuenta {
      id?: string;
      nombre: string;
      nombreUsuario: string;
      email: string;
      password: string;
      ProductosP?: any[]; 
      ProductosI?: any[];
    }