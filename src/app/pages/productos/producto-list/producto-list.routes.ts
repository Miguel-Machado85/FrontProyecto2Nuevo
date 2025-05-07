import { Routes } from "@angular/router";
import { authRemyGuard } from "src/app/guards/auth-remy.guard";
import { ProductoListComponent } from "./producto-list.component";


export const ProductoRoutes: Routes =[{
    path:'',
    children: [
        {
            path:'',
            component: ProductoListComponent,
        },
    ], canActivate: [authRemyGuard]
}]