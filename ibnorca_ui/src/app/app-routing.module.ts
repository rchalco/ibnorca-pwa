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
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
