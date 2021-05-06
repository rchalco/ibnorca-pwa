import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    pathMatch: 'full'
  },
  {
    path: 'inbox',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'programa-auditoria',
    loadChildren: () => import('./pages/apertura_auditoria/programa-auditoria/programa-auditoria.module').then( m => m.ProgramaAuditoriaPageModule)
  },
  {
    path: 'master-elaboracion-auditoria',
    loadChildren: () => import('./pages/elaboracion_auditoria/master-elaboracion-auditoria/master-elaboracion-auditoria.module').then( m => m.MasterElaboracionAuditoriaPageModule)
  },
  {
    path: 'ivo',
    loadChildren: () => import('./pages/test/ivo/ivo.module').then( m => m.IvoPageModule)
  },
  {
    path: 'ruben',
    loadChildren: () => import('./pages/test/ruben/ruben.module').then( m => m.RubenPageModule)
  },
  {
    path: 'myke',
    loadChildren: () => import('./pages/test/myke/myke.module').then( m => m.MykePageModule)
  },
  {
    path: 'list-ciclos',
    loadChildren: () => import('./pages/elaboracion_auditoria/list-ciclos/list-ciclos.module').then( m => m.ListCiclosPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'panel-documentos',
    loadChildren: () => import('./pages/toma-decision/panel-documentos/panel-documentos.module').then( m => m.PanelDocumentosPageModule)
  },
  {
    path: 'registro-solicitud-servicio',
    loadChildren: () => import('./pages/solicitud-servicio/registro-solicitud-servicio/registro-solicitud-servicio.module').then( m => m.RegistroSolicitudServicioPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true, relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
