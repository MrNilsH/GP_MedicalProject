import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/menu-layout/menu-layout.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { HistorialMedicoComponent } from './dashboard/historial-medico/historial-medico.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'historialMedico',
                component: HistorialMedicoComponent
            },
        ]
    },
];
