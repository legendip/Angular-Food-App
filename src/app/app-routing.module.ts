import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignupComponent } from './user-signup/user-signup.component';

const routes: Routes = [
  {
    path:'',
    component:SearchBarComponent
  },
  {
    path:'restaurant',
    component:RestaurantComponent
  },
  {
    path:'signup',
    component:UserSignupComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
