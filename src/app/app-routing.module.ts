import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './views/home-page/home-page.component';
import { ProductsDashboardComponent } from './views/products-dashboard/products-dashboard.component';
import { ContactComponent } from './views/contact/contact.component';
import { UserDiaryDashboardComponent } from './views/user-diary-dashboard/user-diary-dashboard.component';
import { UserDiaryComponent } from './views/user-diary/user-diary.component';

const routes: Routes = [
  {path: "", component: HomePageComponent},
  {path: "products", component: ProductsDashboardComponent},
  {path: "diary", component: UserDiaryComponent},
  {path: "contact", component: ContactComponent},
  {path: "profile", component: UserDiaryDashboardComponent},
  {path: "**", redirectTo: ""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
