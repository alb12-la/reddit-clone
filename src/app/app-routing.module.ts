import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostViewComponent } from './post-view/post-view.component'
import { ListViewComponent } from './list-view/list-view.component'
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/welcome',
  },
  {
    path: ':afterPath',
    component: ListViewComponent,
  },
  // {
  //   path: ':post',
  //   component: PostViewComponent,
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
