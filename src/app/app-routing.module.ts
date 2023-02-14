import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DoctorsComponent } from './catalogos/doctors.component';


const  routes : Routes = [
  {path: "doctors", component : DoctorsComponent},
  // {path : "patients", component : PatientsComponent }

]
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
