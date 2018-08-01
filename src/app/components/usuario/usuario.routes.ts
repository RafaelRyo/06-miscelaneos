
//AQui manejamos las rutas solamente de usuario osea las rutas hijas internas de usuario
import {  Routes } from '@angular/router';

import {UsuarioEditarComponent} from './usuario-editar.component';
import {UsuarioNuevoComponent} from './usuario-nuevo.component';
import {UsuarioDetalleComponent} from './usuario-detalle.component';
//AQui esportamos USUARIO_ROUTES con el export para ponerlo en app.routes en la parte de children
export const USUARIO_ROUTES: Routes = [
  { path: 'nuevo', component: UsuarioNuevoComponent },
  { path: 'editar', component: UsuarioEditarComponent },
  { path: 'detalle', component: UsuarioDetalleComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'nuevo' }
];
