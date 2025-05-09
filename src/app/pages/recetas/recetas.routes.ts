import { Routes } from "@angular/router";
import { authRemyGuard } from "src/app/guards/auth-remy.guard";
import { ListaRecetasComponent } from "./listaRecetas/lista-recetas/lista-recetas.component";


export const RecetasRoutes: Routes =[{
    path:'',
    children: [
        {
            path:'',
            component: ListaRecetasComponent,
        },
    ], canActivate: [authRemyGuard]
}]