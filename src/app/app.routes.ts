//esto es para las rutas sacando ng2ro sacamos todo el cuerpo para manejar las rutas
import { RouterModule, Routes } from '@angular/router';

//componentes
import { HomeComponent} from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import {USUARIO_ROUTES} from './components/usuario/usuario.routes';


//recordar poner APP_ROUTES mayucula
const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'usuario/:id',
    component: UsuarioComponent,
    children: USUARIO_ROUTES
  },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
// lo mismo tener mayusculas APP_ROUTING
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
