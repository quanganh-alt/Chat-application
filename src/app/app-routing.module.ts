import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {MessListComponent} from './mess-list/mess-list.component';
import {AuthGuard} from './auth.guard';


const routes: Routes = [{
  path: 'login',
  component: LoginComponent,
}, {
  path: 'message',
  component: MessListComponent,
  canActivate: [AuthGuard]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
