import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactsComponent } from './contacts/contacts.component';


const routes: Routes = [
  {path:'',component:HomepageComponent, children:[
                                                    {path:'home',component:HomeComponent},
                                                    {path:'about',component:AboutComponent},
                                                    {path:'gallery',component:GalleryComponent},
                                                    {path:'contacts',component:ContactsComponent}
  ]},
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
