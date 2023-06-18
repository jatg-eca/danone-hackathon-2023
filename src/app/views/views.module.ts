import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { UserDiaryComponent } from './user-diary/user-diary.component';
import { ProductsDashboardComponent } from './products-dashboard/products-dashboard.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from '@angular/router';
import { UserDiaryComponentsModule } from './user-diary/user-diary-components/user-diary-components.module';
import { UserDiaryDashboardComponent } from './user-diary-dashboard/user-diary-dashboard.component';
import { ProductsComponentsModule } from './products-dashboard/products-components/products-components.module';
import { ComponentsModule } from '../components/components.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomePageComponent,
    UserDiaryComponent,
    ProductsDashboardComponent,
    ContactComponent,
    UserDiaryDashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    UserDiaryComponentsModule,
    ProductsComponentsModule,
    ComponentsModule,
    FormsModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class ViewsModule { }
