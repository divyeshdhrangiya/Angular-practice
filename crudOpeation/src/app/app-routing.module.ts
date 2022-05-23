import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddUserComponent} from "./add-user/add-user.component";
import {DisplayDataComponent} from "./display-data/display-data.component"

const routes: Routes = [
  { path: 'add', component:AddUserComponent },
  {path: 'display' , component:DisplayDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
