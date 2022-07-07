import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { MainComponent } from './components/main/main.component';
import { ActiveGuard } from './guards/active.guard';


const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    loadChildren: () => import('./modules/main/main.module').then(m => m.MainModule),
    canActivate: [ActiveGuard]
  },
  {
    path: 'auth',
    component: AuthComponent,
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: '**',	redirectTo: 'main' , pathMatch: 'full'
  }
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
