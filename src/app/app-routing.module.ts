import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ListcandidatesComponent } from './listcandidates/listcandidates.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeComponent } from './AdminPanel/employee/employee.component';


const routes: Routes = [
  {path:"", redirectTo: "/home", pathMatch: "full"},
  {path: "home", component:HomeComponent},
  {path: "profile", component:ProfileComponent},
  {path: "listcandidates", component:ListcandidatesComponent},
  {path: "add-employee", component:AddEmployeeComponent},
  {path: "employee", component:EmployeeComponent}
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
