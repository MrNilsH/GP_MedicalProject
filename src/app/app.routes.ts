import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/menu-layout/menu-layout.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { HistorialMedicoComponent } from './dashboard/historial-medico/historial-medico.component';
import { CitaComponent } from './dashboard/cita/cita.component';
import { AutorizacionesComponent } from './dashboard/autorizaciones/autorizaciones.component';
import { AuthGuard } from './components/auth.guard';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
        pathMatch: 'full'
    },
    {
        path: 'registro',
        component: RegisterComponent
    },
    {
        path: '',
        component: LayoutComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'historialMedico',
                component: HistorialMedicoComponent
            },
            {
                path: 'cita',
                component: CitaComponent
            },
            {
                path: 'autorizaciones',
                component: AutorizacionesComponent
            },
        ]
    },
];
