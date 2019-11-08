import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent} from './home-page/home-page.component';
import { AboutUsComponent} from  './about-us/about-us.component';
import { BlogComponent} from  './blog/blog.component';
import { CustomerComponent } from  './customer/customer.component';
import { CustomerListComponent } from  './customer-list/customer-list.component';


const routes: Routes = [
{
	path:"",component: HomePageComponent
},
{
	path: "about",component: AboutUsComponent
},
{
	path: "blog",component: BlogComponent
},
{
	path: "customer",component: CustomerComponent
},
{
	path: "customer-list",component: CustomerListComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
