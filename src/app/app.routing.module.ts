import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { TelephoneMaintenanceComponent } from './components/telephone-maintenance/telephone-maintenance.component';



const routes: Routes = [
    { path: "", redirectTo: "/Login", pathMatch: "full" },
    { path: "Login", component: LoginComponent },
    { path: "telephone-maintenance", component: TelephoneMaintenanceComponent },
  
  
  ];



@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
 export class AppRoutingModule { }