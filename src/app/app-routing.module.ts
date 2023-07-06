import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BasicAngularComponent } from './basic-angular/basic-angular.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [{path:"about",component:AboutComponent},
{path:"contact us",component:ContactUsComponent},{path:"basicaNGular",component:BasicAngularComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
