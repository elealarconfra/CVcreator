import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserInfoComponent } from './user-info/user-info.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'Home',
    component: AppComponent,
  },
  {
    path: 'userInfo',
    component: UserInfoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
