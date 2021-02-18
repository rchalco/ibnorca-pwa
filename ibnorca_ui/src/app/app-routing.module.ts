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
    path: 'edicion-tcp-product-detail',
    loadChildren: () => import('./pages/apertura_auditoria/edicion-tcp-product-detail/edicion-tcp-product-detail.module').then( m => m.EdicionTcpProductDetailPageModule)
  },  
  {
    path: 'plan-auditoria',
    loadChildren: () => import('./pages/elaboracion_auditoria/plan-auditoria/plan-auditoria.module').then( m => m.PlanAuditoriaPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
