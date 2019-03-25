import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimaisComponent } from './animais/animais.component';
import { GuardGuard } from './animais/guard.guard';

const routes: Routes = [{
  path: 'animal', component: AnimaisComponent, resolve: {
    alma: GuardGuard
  }
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [GuardGuard]
})
export class AppRoutingModule { }
