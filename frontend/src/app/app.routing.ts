import { Routes } from "@angular/router";

import { LoginComponent } from "./login/login.component";
import { SchoolViewComponent } from "./school-view/school-view.component";
import { AdminViewComponent } from "./admin-view/admin-view.component";


export const AppRoutes: Routes = [
    {
        path: '',
        component: LoginComponent

    },
    {
        path: 'login',
        component: LoginComponent

    },
    {
        path: 'school-view',
        component: SchoolViewComponent

    },
    {
        path: 'admin-view',
        component: AdminViewComponent

    }

]