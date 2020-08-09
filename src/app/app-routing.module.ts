import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddHackerComponent } from './add-hacker/add-hacker.component';
import { ShowhackerComponent } from './showhacker/showhacker.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'showhacker' },
  { path: 'add-hacker', component: AddHackerComponent },
  { path: 'showhacker', component: ShowhackerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
