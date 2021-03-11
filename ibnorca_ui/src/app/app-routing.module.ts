import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/apertura_auditoria/programa-auditoria/programa-auditoria.module').then( m => m.ProgramaAuditoriaPageModule),
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
    path: 'plan-auditoria',
    loadChildren: () => import('./pages/elaboracion_auditoria/plan-auditoria/plan-auditoria.module').then( m => m.PlanAuditoriaPageModule)
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
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
