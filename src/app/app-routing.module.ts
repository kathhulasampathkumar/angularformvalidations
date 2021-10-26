import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { FormvalidationComponent } from './formvalidation/formvalidation.component';
import { HomeComponent } from './home/home.component';




const routes: Routes = [
  {path:'formvalidation', component:FormvalidationComponent},
  { path:'home', component:HomeComponent},
  {path:'', redirectTo:"home", pathMatch:"full"}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
